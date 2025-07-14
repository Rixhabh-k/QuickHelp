import React from 'react'
import Location from "../components/Location";
import ChatBot from "../components/Chatbot";
import Contact from '../components/Contact'

const Content = () => {
  return (
        <div className='flex justify-evenly gap-3.5 flex-wrap'>
            <div className='flex flex-col gap-5 '>
                <Location/>
                <Contact/>
            </div>
            <ChatBot/>
        </div>
  )
}

export default Content
