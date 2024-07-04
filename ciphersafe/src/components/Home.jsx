import React from "react";

export default function Home() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <body class="font-poppins w-screen flex flex-col">
  
    <div
        id="body"
        class=" w-full items-center justify-center"
    >
        <div class="justify-around items-center gap-8 mb-16">
            <div
                
                class="h-full flex flex-col justify-center bg-indigo-100 rounded-2xl px-11 py-8 shadow-xl border-2 border-black"
            >
                <form method="POST">
                  
                    <div
                        class="flex flex-col justify-center items-center gap-4"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cipher<span className='text-blue-500 font-thin'>Safe</span></span>
                        
                        <p class="text-gray-500 text-sm text-center px-8 pb-2">
                            Protect your password!
                        </p>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                            <input
                                type="text"
                                class="w-full text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Website URL"
                                name="url"
                                required
                            />
                           
                        </div>
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                            <input
                                type="text"
                                class="w-4/5 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Username"
                                name="username"
                                required
                            />
                               <input
                                type="password"
                                class="w-3/4 text-sm h-10 rounded-2xl p-4 bg-blue-50 ring-2 ring-violet-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Password"
                                name="password1"
                                required
                            />
                         
                        </div>
                       
                        <div
                            class="w-4/5 flex flex-row gap-4 justify-center items-center"
                        >
                         
                        </div>

                        <button
                            type="submit"
                            class="bg-blue-600 mt-1 h-12 w-2/4 rounded-2xl text-primary font-bold hover:bg-primary hover:text-white border-primary border-2"
                        >
                            Save
                        </button>
                   
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
    </>
  );
}
