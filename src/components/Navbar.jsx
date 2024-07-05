import React from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav className="sticky top-0 w-screen z-50 bg-indigo-400 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-1 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cipher<span className='text-blue-900 font-serif'>Safe</span></span>
      </Link>

      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="flex max-w-xs items-center ring-violet-900 ring-2 rounded-full bg-white py-1 px-1 gap-1 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"

          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="github.svg"
              alt="User Profile"
            />
            <p>
              <span className="font-bold text-blue-900 "><a href="https://github.com/ripa01?tab=repositories" target='_blank'>Github</a></span>
            </p>
            <i className="fa-solid fa-caret-down mr-1"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}


