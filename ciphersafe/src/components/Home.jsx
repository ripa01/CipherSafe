import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const inputRef = useRef();
  const imgRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", pass: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const showpass = () => {
    if (imgRef.current.src.includes("open.svg")) {
      imgRef.current.src = "close.svg";
      inputRef.current.type = "password";
    } else {
      imgRef.current.src = "open.svg";
      inputRef.current.type = "text";
    }
  };

  useEffect(() => {
    let passwords = localStorage.getItem("pass");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePass = (e) => {
    e.preventDefault();
    const newPasswordArray = [...passwordArray, form];
    setPasswordArray(newPasswordArray);
    localStorage.setItem("pass", JSON.stringify(newPasswordArray));
    console.log(newPasswordArray);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition='Bounce'
      />
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-indigo-200 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="font-poppins min-h-[85vh] flex flex-col">
        <div id="body" className="w-full items-center justify-center">
          <div className="justify-around items-center gap-8 mb-16">
            <div className="h-full flex flex-col justify-center  px-11 py-8 ">
              <form method="POST" onSubmit={savePass}>
                <div className="flex flex-col justify-center items-center gap-4">
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                    Cipher<span className="text-blue-900 font-serif">Safe</span>
                  </span>

                  <p className="text-gray-900 text-sm text-center px-8 pb-2">
                    Protect your password!
                  </p>
                  <div className="w-4/5 flex flex-row gap-4 justify-center items-center">
                    <input
                      type="text"
                      className="w-full text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      className="w-2/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                      name="username"
                      required
                    />
                    <div className="relative w-2/5">
                      <input
                        ref={inputRef}
                        type="password"
                        className="w-full text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                          ref={imgRef}
                          className="p-1"
                          width={30}
                          src="close.svg"
                          alt="Toggle Password Visibility"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="w-4/5 flex flex-row gap-4 justify-center items-center"></div>

                  <button
                    type="submit"
                    className="bg-blue-600 flex justify-center items-center mt-1 h-12 w-1/4 rounded-2xl text-primary font-bold hover:bg-primary hover:bg-blue-400 border-primary border-2"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/jgnvfzqg.json"
                      trigger="hover"
                    ></lord-icon>
                    Save
                  </button>
                </div>
              </form>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center overflow-x-auto sm:rounded-lg">
                <h1 className="font-extrabold text-2xl mb-5 mt-3 text-blue-900">Your Passwords</h1>
                {passwordArray.length === 0 && <div className="text-white">No passwords to show</div>}
                {passwordArray.length !== 0 && (
                  <table className="w-4/5 text-sm text-left rtl:text-right text-blue-900 dark:text-gray-400">
                    <thead className="text-2xs text-violet-100 uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Website name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Password
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {passwordArray.map((item) => (
                        <tr className="bg-indigo-200 border-b dark:bg-gray-800 dark:border-gray-700" key={item.site}>
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                          <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                        </th>
                        <td className="px-6 py-4">
                          {item.username}
                        </td>
                        <td className="px-6 py-8 flex items-center">
                          {item.pass}
                          <img
                            src="copyy.gif"
                            className="h-6 cursor-pointer"
                            alt="copy"
                            onClick={() => copyText(item.pass)}
                          /> 
                        </td>
                        <td className="px-8 py-0 ">
                          <span className="cursor-pointer"><lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                          ></lord-icon></span>

                          <span className="cursor-pointer">
                          <img src="editt.gif" className="h-6" alt="Edit" />
                          </span>
                         
                        </td>
                      </tr>

                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
