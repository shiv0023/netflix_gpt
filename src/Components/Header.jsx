import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RemoveUser, addUser } from '../Utils/UserSlice';
import { toggleSearchView } from "../Utils/GptSlice"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { LanguageUrl, logo } from '../Utils/Constant';
import { changeLang } from '../Utils/ConfigSlice';
const Header = () => {
  const user = useSelector((store) => store.User)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGptSearch)
  function HandlerChange() {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/Browse")
      } else {
        // User is signed out
        dispatch(RemoveUser());
        navigate("/")
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  function HandleGptSearchClick() {
    dispatch(toggleSearchView())
  }
  function HandleChangeLang(e) {
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className='absolute border w-screen  h-[100px] bg-gradient-to-b from-black z-10 justify-between flex '>
      <img className='w-[200px] h-[100px] pt-5  ' alt='logo' src={logo} />
      {/* <ul className='flex text-white pr-50'> */}
      {/* <li className='p-10 font-bold pl-30 text-xl text-violet-500'> <NavLink to="/">home </NavLink></li> */}
      {/* <li className='p-10 font-bold pl-30 text-xl text-green-400'> <NavLink to="/Browse">About </NavLink></li> */}

      {/* </ul> */}



      {user && (
        <div className='flex'>
{ShowGptSearch &&
  
  ( <select onChange={HandleChangeLang} className='w-[100px] h-[50px] mt-10 bg-black text-white font-bold'>

  {LanguageUrl.map((e) => {
    return <option key={e.identifier} value={e.identifier}>
      {e.name}</option>
  })

  }
</select>)
}
         

          <button onClick={HandleGptSearchClick} className='text-center bg-red-200 p-3 rounded-md w-[100px] ml-20 h-10 mt-10 font-bold'>{ShowGptSearch ? "HomePage" : "Gpt"}</button>
          <img alt='User-icon' src={user?.photoURL} className='w-12 h-12 mt-10' />
          <button onClick={HandlerChange} className='bg-red-200 p-3 rounded-md w-[100px] ml-20 h-10 mt-10'>Sign Out </button>

        </div>
      )}


    </div>
  )
}

export default Header