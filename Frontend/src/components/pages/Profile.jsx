import React from 'react'
import { useState , useEffect } from 'react';
import {useAuth} from "../Store/useAuth"


function Profile() {
  const { user } = useAuth();
  const [profileImg, setProfileImg] = useState("../../../images/user.png");

  useEffect(() => {
    if (user && user.profileimg) {
      setProfileImg(user.profileimg);
    }
  }, [user]);
  return (
    <div className='w-[80vw] h-[90vh]  overflow-y-scroll overflow-x-hidden ' >
      <div className="px-8  w-[80vw] h-[10vh] bg-red-600 flex px-4 items-center justify-between">
        <h1>Wellcome , {user && user.fullname}</h1>
        <div className='flex items-center gap-5'>
        <h1>{user && user.email}</h1>
        <img className='w-12 h-12' src={profileImg} alt="" />
        </div>
      </div>
     
    </div>
  )
}

export default Profile
