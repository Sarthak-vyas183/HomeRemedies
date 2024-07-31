
import React, { useState } from 'react';
import { useAuth } from '../Store/useAuth';
import { useNavigate } from 'react-router-dom';
function SignUp() { 
   const [Errmsg, setErrmsg] = useState("")
   const [user , setUser] = useState({
    fullname : "",
    email : "",
    ph_no : "",
    password : ""
   })
   const navigate = useNavigate();
   const {storeTokenInLs} = useAuth() 

 const handleInput = (e) => {
    const {name , value} = e.target;
    setUser({
      ...user,
      [name] : value,
    });
  }

  const handlesubmit = async (e) => {
     e.preventDefault();
     try {
        const response = await fetch("http://localhost:3000/api/user/signup" , {
          method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
        })
       
        if(!response.ok) {
          const data = await response.json()
          if(response.status == 405) {
            setErrmsg(data.msg)
          } else {
            setErrmsg(data.msg.issues[0].message)
          }
          alert(Errmsg , "")
          throw new Error(`Network response was not ok: ${response.status}`);

         
        }


        const data = await response.json();
        storeTokenInLs(data.token)
        setUser({
          fullname: "",
          email: "",
          phone: "",
          password: ""
      });
      alert("signUp successfully")
      navigate("/")

     } catch (error) {
      console.error('Fetch error:', error);
            alert(error)
     }
  }

  return (
    <div>
        <div className="main w-screen h-[90vh] flex">
            
            <div className="Res-form w-[100%] h-full py-24 flex justify-center">
                <form onSubmit={handlesubmit}>
                    <h1 className="flex justify-center mb-4 text-2xl">signUpform Form</h1>
                    <div>
                        <label htmlFor="username">fullname</label> <br />
                        <input type="text" id="username" name="fullname" value={user.fullname} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" id="email" name="email" value={user.email} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label> <br />
                        <input type="text" id="phone" name="ph_no" value={user.ph_no} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" id="password" name="password" value={user.password} onChange={handleInput} />
                    </div>
                    <button type="submit" className="w-20 h-8 rounded-sm bg-blue-900 mt-4">Register</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default SignUp
