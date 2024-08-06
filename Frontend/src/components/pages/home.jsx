import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.left div', {
        x: -500,
        opacity: 0,
        duration: 0.7,
        stagger : 0.3,
      });
    });

   
    return () => context.revert();
  }, []);

  return (
   <section>
        <div
      className="w-[100vw] h-[100vh]"
      style={{
        backgroundImage: 'url(../../../images/home.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        rotate: '360deg',
      }}
    >
      <section className="left w-[50%] h-full flex flex-col justify-center items-center">
        <div className="w-full px-16">
          <p className="text-green-400 bg-gray-700 bg-opacity-80 rounded-md p-2 text-5xl">
            Natural Herbal <br />
            Remedies
          </p>
        </div>

        <div className="w-full px-16">
          <h1 className="text-white text-4xl font-bold">
            100% <br /> Organic
          </h1>
        </div>
        <br />
        <br />
        <div className="w-full flex px-16">
          <div className="w-[90%] rounded-sm py-2 bg-opacity-60 bg-gray-600 flex gap-2">
            <span className="w-1 h-[100%] bg-red-500 rounded-sm"></span>
            <p className="text-white w-[80%]">
              Rural remedies epitomize a harmonious blend of nature's wisdom and
              human resilience, providing holistic healing solutions rooted in
              centuries-old knowledge. They celebrate the enduring efficacy of
              traditional practices, showcasing a sustainable approach to
              wellness deeply intertwined with community strength.
            </p>
          </div>
        </div>
      </section>
       </div> 


       <div className="part2 w-[100vw] h-[100vh] bg-white">
            <div className='p2-header w-full h-[15vh] relative top-[15%] bg-red-50'>
                <h1>dffjlfjsfkj</h1>
            </div>

           <div className="p2-content w-full h-[85%] bg-red-400 flex">
               <div className="part1 w-[50%] h-full">
                    <h1>f;dsjfljfldjfdlkfj</h1>
               </div> 

               <div className="part2 w-[50%] h-full bg-green-800 p-4">
                  <img className='pt-24 pl-10' src="../../../images/home02.png" alt="Loading...." />
               </div>
           </div>
            
       </div>
   </section>
  );
}

export default Home;
