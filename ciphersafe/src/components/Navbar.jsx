import React from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav className="sticky top-0 w-screen z-50 bg-indigo-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CipherSafe</span>
      </Link>

      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="flex max-w-xs items-center rounded-full bg-gray-100 py-1 px-2 gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
              alt="User Profile"
            />
            <p>
              <span className="font-bold">User</span>
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


