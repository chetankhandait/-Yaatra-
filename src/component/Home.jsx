// import React from 'react'
// import './Home.css'

// import HotelListing from "./HostelListing"
import Filter from "./Filter"
import HotelListing from "./HostelListing"
import Search from "./Search"
import Data from "../Data/Data"
// import Search from './Search'

import React from 'react'
import HeroSection from "./HeroSection"
 console.log(Data)
const Home = () => {
  return (
   <div>
       <div className='w-full  font-mooli'>
                  <HeroSection/>
                   <Search/>

          <div className='w-full   p-2.5 bg-white flex gap-[5rem] mx-auto ' >
                <Filter/>
              <div className="flex flex-col ">


                
                  {Data.map(k=>(
                     <HotelListing
                      name={k.name}
                      type={k.type}
                      room={k.rooms}
                      img={k.img}
                    />
                  )
                  )}
                  
             </div>
        </div>
                  


      </div>
 </div>
  )
}

export default Home

