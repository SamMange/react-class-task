import React from 'react'
import { useState } from 'react';

const StartPage = () => {
  const [loginStatus, setLoginStatus] = useState('')
  return (
    <div>
      <button onClick={() => { }}>{`${loginStatus ? "Click to Logged Out" : "Click to Logged In"}`}</button>
    </div>
  )
}


export default StartPage;