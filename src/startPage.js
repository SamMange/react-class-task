import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const StartPage = () => {
  const [loginStatus, setLoginStatus] = useState('')
  return (
    <div>
      <button onClick={() => { }}>{`${loginStatus ? "Click to Logged Out" : "Click to Logged In"}`}</button>
      <Outlet/>
    </div>
  )
}


export default StartPage;