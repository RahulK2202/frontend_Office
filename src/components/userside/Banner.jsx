import React from 'react'
import img from '../../images/banner1.png'
import LazyLoad from 'react-lazy-load';


function Banner() 

{


  return (
  
    <div>
        <>   
     <div className='w-full h-full flex justify-center'>

    <div className=' w-1/2 '>
     <p className=' text-7xl font-semibold  text-customColorC   float-left mt-24 ml-10  '>Revolutionize Office Productivity <br /> <span className='float-left'> OfficeExpert</span>  </p>
      {/* <p className='font-semibold text-7xl  text-customColorC  mt-48 float-left bg-blue-gray-800 '>limits </p> */}
    <p className='mt-72 ml-11  text-xl whitespace-pre-line text-left  '>comprehensive office management solution designed to streamline and optimize your workplace operations. With its powerful features and intuitive interface, OfficeExpert empowers you to unlock your office's full potential.</p>

        
    </div > 
    <LazyLoad  offset={100}>
    <div className=' w-fit h-fit'>
     <img src={img}/>
    </div>
    </LazyLoad>
  
    </div>
    {/* <div className='bg-gray-200 h-96 w-full mt-64 text-4xl font-bold '><p className='float-left ml-20 mt-7'>Explore top courses</p>
    
    </div> */}
    </>
    </div>
  )
}

export default Banner
