import React from 'react'

const Home = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
    <div className="w-full h-screen  text-white bg-[url(https://images.unsplash.com/photo-1616225273962-05c320ca73d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D)] bg-center bg-no-repeat bg-cover  rounded-sm m-5 flex-col    p-4">
      <span className='text-[50px] flex items-center justify-center font-nomal text-white  mt-64'>Spices that reflects The</span>
      <span className='text-[56px] flex items-center justify-center font-normal text-white  '>Richness of our Culture</span>
    <span className='text-[20px] flex items-center justify-center '>spices of india is known for providing ground as well various blended spices and masala variants</span>
    <span className='text-[20px] flex items-center justify-center '>We believe that spices are integral part of every cuisine to reflect the essence of our culture</span>
    <div className='flex items-center justify-center w-full flex-row gap-12'>
    <button type="button" class=" w-32 text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-500 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  dark:bg-green-500 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-500 flex items-center justify-center mt-10">Explore More</button>
    <button type="button" class=" w-32 text-white  focus:ring-4 focus:ring-offset-white font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  dark:bg-green-500 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-500 flex items-center justify-center mt-10">Watch Video</button>
    </div>
    </div>
    </section>
              

 
  
  



  )
}

export default Home