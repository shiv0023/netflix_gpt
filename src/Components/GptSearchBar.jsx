import React from 'react'
import lang from "../Utils/LanguageConstant"
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    // const LangKey = useSelector((store) => store.config.lang);


    return (
        <div className=' justify-center pt-[10%] absolute'>

            <form className='text-center bg-black   grid grid-cols-6' onSubmit={((e) => e.preventDefault())}>
                <input className='p-4 m-5 bg-blue-700 text-black font-bold rounded-md ' type='text'
                    placeholder={lang.Span.gptSearchPlaceholder} />
                <button className='p-4 m-4 bg-red-600 rounded-md '>{lang.en.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar