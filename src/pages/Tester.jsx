import React, { useState } from 'react'
import { Toaster, toast} from 'react-hot-toast'

function Tester() {
    const [activeStep,setActiveStep] = useState(0);

    function handleBack(){
        setActiveStep((prev)=>prev-1)
    }
   function handleNext(){
        setActiveStep((prev)=>prev+1)
    }


  return (


    <div className='flex w-full h-auto'>
        
        <div className="w-full h-auto flex flex-col place-content-center shadow-xl rounded-md m-5">
            <Toaster position='top-center' limit={3}></Toaster>
            <div className='w-full h-auto flex flex-col place-content-start place-items-start px-20'>
                {/* {formContent(activeStep)} */}
            </div>
            <div className='w-full py-4 flex place-content-center px-20'>
                    <div className={activeStep>0 ? "flex place-content-between w-full" : "flex place-content-end w-full"}>
                        {activeStep>0 ? 
                            <button className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]' onClick={handleBack} >Back</button>
                            : null
                        }

                        {activeStep!==2 ? <button className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]' onClick={handleNext} >Next</button>
                       
                        :
                        <button type='button' className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]' >Submit</button>
                        }
                        
                    </div>
                       
            </div>
        </div>
        
    </div>
  )
}

export default Tester
