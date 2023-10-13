import React from 'react'


const HotelListing = (k) => {









  return (




    <div className='shadow-md pt-2 mx-6 w-full border'>
       <div className='flex flex-col py-[0.7rem] px-[1.9]'>
        <div className='flex mb-1 ' >
          <div className="pr-[27px] " >

            <img src={k.img} alt="" className='h-60 pl-2.5 pr-2.5' />
          </div>
          <div className='flex justify-start'>



          <div className="flex flex-col  gap-1">
            <h3 className='text-xl font-[600]  ' >{k.name}</h3>
            <div className="flex flex-col mt-3 gap-2">
              <p>
                <a href='/' className='text-blue-900 underline'>
                  show on map
                </a>
              </p>

              <h4 className='text-base'>{k.type} </h4>
              <p className='flex flex-col mt-2  '>

                <h3 className='font-normal text-lg font-semibold '>
                 {k.rooms}
                </h3>
                <h3 className=''>
                  Free cancellation
                </h3>
                <h3 className='mt-1'>
                  No prepayment needed - pay at the property
                </h3>
              </p>
            </div>






          </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default HotelListing
