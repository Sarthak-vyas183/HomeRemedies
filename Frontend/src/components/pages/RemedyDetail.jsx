import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RemedyDetail() {
  const [currRemedy, setCurrRemedy] = useState(null);
  const [owner, setOwner] = useState("");
  const { id } = useParams();

  const curr_remedy = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/auth/remedydetail/${id}`
      );
      if (!response.ok) {
        throw new Error("Remedy Detail Not Found");
      }
      const data = await response.json();
      setCurrRemedy(data.remedydetail);
      setOwner(data.ownerdata);
    } catch (error) {
      console.error("Error fetching remedy details:", error);
      alert("Error fetching remedy details");
    }
  };

  useEffect(() => {
    curr_remedy();
  }, [id]);

  const getImageSrc = (buffer) => {
    if (!buffer) return "";
    const binary = new Uint8Array(buffer.data).reduce(
      (acc, byte) => acc + String.fromCharCode(byte),
      ""
    );
    const base64String = window.btoa(binary);
    return `data:image/jpeg;base64,${base64String}`;
  };

  if (!currRemedy) {
    return (
      <div className="w-[100vw] h-[90vh] relative top-[10vh]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* Internet Explorer and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
      <div className="w-[100vw] h-[90vh] top-[10vh] flex overflow-x-hidden">
        <div className="fixed w-[20%] h-full left-0 top-[10vh] border-r border-black">
          <div className="w-full h-48 px-2">
            <div className="w-full h-12 flex justify-start items-center gap-2 border-y px-2 border-black">
              <img
                className="w-8 h-8 rounded-full"
                src="../../../images/user.png"
                alt=""
              />
              <p>{owner.fullname}</p>
            </div>
            <div className="flex gap-4">
              <span>Email :</span>
              <span>{owner.email}</span>
            </div>
            <div className="flex gap-4">
              <span>Phone :</span>
              <span>{owner.ph_no}</span>
            </div>
            <div className="flex gap-4">
              <span>Status :</span>
              <span>{owner.isDoctor ? "Doctor" : "User"}</span>
            </div>
            <div className="flex justify-start mt-2">
              <button className="p-1 text-white bg-blue-700 rounded-md">
                Connect
              </button>
            </div>
          </div>
         </div>


        <div className="w-[50%] h-full ml-[20%] mr-[30%] p-8 pb-28 fixed top-[10vh] overflow-y-scroll custom-scrollbar">
          <div className="p-4 img w-[100%] h-auto flex items-center justify-center">
            <img
              className="w-[80%] h-full rounded-md"
              src={getImageSrc(currRemedy.image)}
              alt=""
            />
          </div>
          <div className="title_desc">
            <h1 className="font-medium">
              <span className="font-semibold text-2xl font-bold">Title : </span>
              {currRemedy.title}
            </h1>{" "}
            <br />
            <p className="leading-tight">
              <span className="font-semibold text-2xl font-bold">
                Description : <br />
              </span>
              {currRemedy.description}
            </p>{" "}
            <br />
          </div>
          <div className="stepsAndIngredient">
            <span>
              <p className="font-semibold text-2xl font-bold">Ingredients : </p>
              {currRemedy.ingredients}
            </span>{" "}
            <br />
            <br />
            <span>
              <p className="font-semibold text-2xl font-bold">Steps :</p>
              {currRemedy.steps}
            </span>{" "}
            <br />
          </div> <br />

          <div className="w-full h-16  flex justify-evenly items-center">
             <input className="w-[75%] h-8 border-4 outline-none border-gray-300 px-2" type="text" placeholder="comment Here..." />
             <button className="py-1 px-6 bg-blue-600 rounded-md text-white">Post</button>
          </div> 

        </div> 



        <div className="fixed w-[30%] h-full right-0 top-[10vh] overflow-y-scroll pr-2 custom-scrollbar">
          <h1>comments :</h1> <br />
          <section className="flex flex-col gap-8">
            <div className="w-full h-auto border-y border-black">
              <span className="p-2 border-b border-black w-full h-10 flex justify-start items-center gap-2 p-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src="../../../images/user.png"
                  alt=""
                />
                <p>User Name</p>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium animi culpa nesciunt quisquam doloribus consequatur
                mollitia omnis alias tempora nisi, dolor rem eius ipsa ab
                tempore voluptate libero quibusdam aliquid?
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default RemedyDetail;
