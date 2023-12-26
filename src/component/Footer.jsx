import React from 'react'

const Footer = () => {
  return (
    <div className='  bottom-0  w-full  bg-gray-500'>


      <div className=' flex flex-col  sm:items-center px-2 py-2 text-white ' >

        <div className='flex    text-base'>
          <h3 > <span>&&</span>  English(In) </h3>
          <h3>$INR</h3>

        </div>
        <div className='text-base'>
          <h4>C 2023 Yatra,Inc.</h4>

        </div>
        <div>
          <ul className='flex text-sm gap-2' >
            <li>Privacy</li>
            <li>Term</li>
            <li>Sitemap</li>
            <li>Comapany details</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Footer
