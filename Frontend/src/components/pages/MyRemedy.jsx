import React, { useState , useEffect} from 'react';
import { useAuth } from '../Store/useAuth';

function MyRemedy() { 
const {token} = useAuth()
const [Errmsg , setErrmsg] = useState("Loading....");
const [remedies , setRemedies] = useState([]);

const FetchRemedy = async () => {
   try {
       const response = await fetch("http://localhost:3000/api/user/myremedy" ,{
        method : "GET",
          header : {
           Authorization : `Bearer ${token}`
          }
       }
     ) 
    
     if(!response.ok) {
       return setErrmsg("Fetch Failed Backend Server Error") 
     } 
       
      const data = response.json();
      console.log(data)
      setRemedies(data);
      setErrmsg("data Fetch");

   } catch (error) {
     console.log(`error occure : ${error}`);
     setErrmsg("Fetch Failed : internal server Error")
   }
}

useEffect(() => {
  if(token) {
    FetchRemedy()
  }
}, [token])


  return (
    <div className='w-[80vw] h-[90vh] bg-slate-900 overflow-y-scroll'>
         <h1 className='text-blue-600'>{Errmsg}</h1>    
    </div>
  )
}

export default MyRemedy;
