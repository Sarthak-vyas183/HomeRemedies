import React from "react";

function About() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full">
        <div
          className="img w-full h-[50%]"
          style={{ backgroundImage: `url("../../../images/about.png")` }}
        >
          <p className="overlay flex justify-center items-center text-white font-bold text-2xl gap-4 w-full h-full bg-black bg-opacity-60">
            <a href="/" className="text-blue-300 underline">
              Home
            </a>
            About
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/2 ">
          <span className="w-1/2 text-2xl font-semibold">About Us</span>
          <span className="w-1/2">
            HomeRemedy.in was born in 2024 when three college students
            participated in the Sistech Hackathon. The challenge was to create a
            web application that could have a positive impact on society.
            Motivated by the opportunity to make a difference, they developed a
            platform where users can share and explore homemade remedies for
            various ailments. This initiative not only impressed the judges but
            also laid the foundation for a community-driven platform that
            empowers individuals to leverage traditional knowledge for health
            and well-being..
          </span>
        </div>
      </div>
      <div className=" w-full h-full">
        <div className="w-full h-[10%] bg-slate-700"></div>
        <h1 className="text-2xl font-semibold p-4 pl-24">Founder</h1>
        <div className="flex justify-center items-center gap-4">
          <span>
            <img
              className="rounded-md"
              src="https://media.licdn.com/dms/image/D5603AQH5rgrXmYTRVg/profile-displayphoto-shrink_400_400/0/1712716429252?e=1729123200&v=beta&t=uwQl6pYY-P0X_WAgbaT61nWhYlf5unJPBeeJX5OJFW8"
              alt=""
            />
            <p className="font-semibold underline">
              <h1>
                <a href="https://www.linkedin.com/in/sarthak-vyas-/">
                  Sarthak Vyas
                </a>
              </h1>
            </p>
            <p> Co-founder and Chairman of HomeRemedy.org</p>
          </span>
          <span>
            <img
              className="rounded-md"
              src="https://media.licdn.com/dms/image/v2/D5603AQFWEEvRQA2O-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718255276985?e=1729123200&v=beta&t=JuXd2Gq_1QXN5ZKRlQ3xsuNLMDPqMK6S0W3tTxEUh2Q"
              alt=""
            />
            <p className="font-semibold underline">
              <h1>
                <a href="https://www.linkedin.com/in/shivani-barya-/">
                  Shivani Barya
                </a>
              </h1>
            </p>
            <p>Airbnb Co-founder and Chief Strategy Officer</p>
          </span>
          <span>
            <img
              className="rounded-md"
              src="https://media.licdn.com/dms/image/v2/D4D03AQFMNcwbML1I5A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723357631817?e=1729123200&v=beta&t=L9GTWtMDpkBLcoIwClHRWiKfwoiTXa1h55oAcuiQ_go"
              alt=""
            />
            <p className="font-semibold underline">
              <h1>
                <a href="https://www.linkedin.com/in/yash-sharma-357064224/">
                  Yash sharma
                </a>
              </h1>
            </p>
            <p>Airbnb Co-founder and Chief Executive Officer</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
