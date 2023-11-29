import React, { useEffect } from 'react';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { RemoveUser, addUser } from '../Utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

      } else {
        // User is signed out
        dispatch(RemoveUser());
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>

      {/* Your JSX goes here */}
      <Login />
    </div>
  );
};

export default Body;
