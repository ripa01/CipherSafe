import React, { useState } from "react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", pass: "" });
  const showpass = () => {
    if (ref.current.src.includes("open.svg")) {
      ref.current.src = "close.svg";
    } else {
      ref.current.src = "open.svg";
    }
  };
  const savePass = () =>{
    console.log(form)

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="font-poppins w-screen flex flex-col">
        <div id="body" className=" w-full items-center justify-center">
          <div className="justify-around items-center gap-8 mb-16">
            <div className="h-full flex flex-col justify-center bg-indigo-100 rounded-2xl px-11 py-8 shadow-xl border-2 border-black">
              {/* <form method="POST"> */}
                <div className="flex flex-col justify-center items-center gap-4">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Cipher<span className="text-blue-500 font-thin">Safe</span>
                  </span>

                  <p className="text-gray-500 text-sm text-center px-8 pb-2">
                    Protect your password!
                  </p>
                  <div className="w-4/5 flex flex-row gap-4 justify-center items-center">
                    <input
                      type="text"
                      className="w-full text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Website URL"
                      value={form.site}
                      onChange={handleChange}
                      name="site"
                      required
                    />
                  </div>
                  <div className="w-4/5 flex flex-row gap-4 justify-center items-center">
                    <input
                      type="text"
                      className="w-2/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                      name="username"
                      required
                    />
                    <div className="relative w-2/5">
                      <input
                        type="password"
                        className="w-full text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Password"
                        value={form.pass}
                        onChange={handleChange}
                        name="pass"
                        required
                      />
                      <span
                        className="absolute right-1 top-1.5 cursor-pointer"
                        onClick={showpass}
                      >
                        <img
                          ref={ref}
                          className="p-1"
                          width={30}
                          src="close.svg"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="w-4/5 flex flex-row gap-4 justify-center items-center"></div>

                  <button
                    
                    onClick={savePass}
                    className="bg-blue-600 flex justify-center items-center mt-1 h-12 w-1/4 rounded-2xl text-primary font-bold hover:bg-primary hover:bg-blue-400 border-primary border-2"
                  >
                   
                    <lord-icon
                      src="https://cdn.lordicon.com/jgnvfzqg.json"
                      trigger="hover"
                    ></lord-icon>
                    Save
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
