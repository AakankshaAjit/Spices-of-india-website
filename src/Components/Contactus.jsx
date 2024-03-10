import React from 'react'
import { useDeferredValue } from 'react'

const Contactus = () => {
  return (
    
    <div className='w-full h-screen flex items-center justify-center flex-row  gap-6 '>
       
       <div className='w-[30%] h-[65%] rounded-lg shadow-lg '>
         <img className='w-full h-[100%] rounded-lg' src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
       </div>
       <div className='w-[30%] h-[65%] rounded-lg bg-black'>
       <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <span className='text[20px] font-bold text-white'>Contact Us</span>  
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium  text-white">Name</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Full Name" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium  text-white dark:text-white">Email</label>
                      <input type="password" name="password" id="password" placeholder="Enter your email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium  text-white  dark:text-white">Details</label>
                      <input type="password" name="password" id="password" placeholder="Enter your Details" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          
                          
                      </div>
            
                  </div>
                  <button type="submit" class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-32">Get in Touch</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      
                  </p>
              </form>
          </div>
      </div>
      </div>
      

       

    
    
    
  )
}

export default Contactus