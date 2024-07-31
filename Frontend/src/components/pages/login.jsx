import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Store/useAuth';

const Login = () => {
  const [Errmsg, setErrmsg] = useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  const navigate = useNavigate();
  const {storeTokenInLs} = useAuth() 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, password: user.password }),
      });

      if(!response.ok) {
        const data = await response.json()
        if(response.status == 405) {
          setErrmsg(data.msg)
        } else {
          setErrmsg(data.msg.issues[0].message)
        }
        alert(Errmsg , "")
        throw new Error(`Network response was not ok: ${respones.status}`);

       
      }

      const data = await response.json();
      storeTokenInLs(data.token)
      setUser({
        email: "",
        password: "",
      });
      // Redirect to a protected route or home page
      alert("Login success");
      navigate("/")
    } catch (error) {
      setErrmsg("Login failed. Please check your credentials.");
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {Errmsg && <p className="text-red-500 mb-4">{Errmsg}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
