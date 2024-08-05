import React from 'react'

function home() {
  return (
    <div className='w-[100vw] h-[100vh] ' style={{backgroundImage : 'url(../../../images/home.png)', backgroundSize:'cover', backgroundRepeat : 'no-repeat' , rotate : '360deg'}}>
         <section className="left w-[50%] h-full  flex flex-col justify-center items-center">
                <div className="w-full px-16 ">
                   <p className='text-green-400 bg-gray-700 bg-opacity-80 rounded-md p-2 text-5xl'>Natural Herbal <br/>Remedies</p>
                </div>

                <div className="w-full  px-16">
                   <h1 className='text-white text-4xl font-bold'>100% <br /> Organic</h1>
                </div>
                  <br /><br />
                <div className="w-full flex gap-2 px-16">
                   <span className='w-1 h-[100%] bg-red-500 rounded-sm'></span>
                   <p className='text-white w-[70%]'>Rural remedies epitomize a harmonious blend of nature's wisdom and human resilience, providing holistic healing solutions rooted in centuries-old knowledge. They celebrate the enduring efficacy of traditional practices, showcasing a sustainable approach to wellness deeply intertwined with community strength.</p>  
                </div>   
         </section>
    </div>
  )
}

export default home
