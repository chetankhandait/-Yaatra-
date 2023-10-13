// import React from 'react'
// import './Home.css'

// import HotelListing from "./HostelListing"
import Filter from "./Filter"
import HotelListing from "./HostelListing"
import Search from "./Search"

// import Search from './Search'

import React from 'react'

const Home = () => {
  return (
    <div>
       <div className='w-full  font-mooli'>
      <div className="flex text-black w-full   p-2.5 ">
        <div className="bg-white w-1/2 rounded-l-2xl w-2/3 ml-[0.6rem]">
          <nav className="flex justify-between">
            <img src="https://thumbs.dreamstime.com/b/hotel-linear-icon-modern-outline-logo-concept-white-ba-background-restaurant-collection-suitable-use-web-apps-133521021.jpg" alt="" className="w-14" />
            <ul className="flex gap-x-16 text-right mt-2.5 mr-4.5 mb-0 ml-0 no-underline pt-0.5 pb-0.5 pr-16 pl-16">
              <li>
                <a href='/' className="text-#181414 font-bold">Home</a>
              </li>
              <li>
                <a href='/' className="text-#181414 font-bold">Vilas</a>
              </li>
              <li>
                <a href='/' className="text-#181414 font-bold">Manor</a>
              </li>
            </ul>
          </nav>
          <div className='flex -mt-9 -mb-[3rem] mx-0.5 gap-5 items-center'>
            <h2 className="text-[3.7rem] mb-[3.9rem] my-10 mx-0.5 font-mooli font-semibold font leading-[1.1]">
              Reserve Your <br />
              Ideal Holiday

            </h2>
            <img src="https://1.bp.blogspot.com/-TlIRtOXmmDA/WS8Ar-jMLDI/AAAAAAAAH58/b03hdJmdDTs6j0X9d9FQOlHWAHYTJC6KQCK4B/s1600/Stock%2Bimages%2Bare%2Boften%2Bcasted%2Bwith%2Battractive%2Bpeople%2B...-790465.jpg" alt="" className=" w-[9rem] h-[8.6rem] object-cover   rounded-full " />

          </div>
          <p className="pl-1 text-[1.1rem]">Let's get Aquanted!</p>
          <hr className='border-[1.2px] bg-black' />
          <div className="flex items-center gap-8 my-0 mx-1.5 mb-[1.1rem]">

            <h4 className="w-1/2 font-[500] font-mooli mt-[1rem] ml-[0.2rem] ">
              We specialize in curating exceptional villa rentals. providing unparalleled level of comfort, privacy, and convenience for yourdream vacation.
            </h4>
            <button className="bg-black text-white py-[0.7rem] - px-[3rem] rounded-[.9rem] font-semibold cursor-pointer">More</button>
            {/* border-radius: 15px;
    padding: 0.7rem 2.35rem; */}

          </div>
          <div className="flex justify-start gap-14 align-middle py-1 font-medium mb-[1.25rem]">

            <section className='flex flex-col mx-2.5 -my-2'>
              <h2 className="font-[700] text-[1.2rem]">115k+</h2>
              <p>Capital Raised</p>

            </section>
            <section className='flex flex-col mx-2.5 -my-2'>
              <h2 className="font-[700] text-[1.2rem]">70k+</h2>
              <p>Happy Customer</p>

            </section>
            <section className='flex flex-col mx-2.5 -my-2'>
              <h2 className="font-[700] text-[1.2rem]">45k+</h2>
              <p>Property Option</p>

            </section>
          </div>
          {/* <button className="absolute text-black -bottom-16 bg-transparent left-5 border font-medium px-3 py-1 text-sm">Popular</button> */}
          <img src="https://th.bing.com/th/id/OIP.4W6SERqnLGe_KVYyvNEgSgHaE8?pid=ImgDet&rs=1" alt="" className="w-80 h-44 " />
        </div>
        <div className="section-two">
          <button className="absolute right-24 top-7 rounded-2xl py-2 px-4 bg-white font-semibold  ">Contact Us </button>
          <div className="h-20 border-white">

          </div>
          <p className="absolute bottom-24 text-white w-4/12 right-56">
            Enjoy a luxurious Melbourne vacation in a villa with breathtaking city views and easy access to the vibrant city life and culinary delights.
          </p>
         
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80" alt="" className=" mx-0.5 -my-20 h-full" />

        </div>
      </div>
       <Search/>
       <div className='w-full   p-2.5 bg-white flex gap-[5rem] mx-auto ' >
       <Filter/>
       <div className="flex flex-col ">

         <HotelListing
         name="FabHotel Prime The Wish"
         type="Single Room"
         rooms="Superier Double Room"
         img= "https://cf.bstatic.com/xdata/images/hotel/square600/468989419.webp?k=4d02aef8e09d9dc87d510edf0977020f49559b6ed24775743504ab0db689b0c0&o="

         
         />
         <HotelListing
         name="Radisson BhopalOpens "
         type="Double  Room"
         rooms="Superier Double Room"
         img="https://cf.bstatic.com/xdata/images/hotel/square600/321192980.webp?k=da53ab42a7789b304798e9d51ccaa1f0d8c0707bb82213d7c2049d3e8e1479e5&o="

         />
         <HotelListing
         name="Taj Lakefront Bhopal "
         type="Deluxe Room King Bed"
         rooms="Superier Double Room"
         img="https://cf.bstatic.com/xdata/images/hotel/square600/327168421.webp?k=c6098ea9aaed1ffb49c2663ca45f156728f9ad9106178c868cb76bede2e3ef7d&o="

         />
       </div>
         </div>
        
    </div>
    </div>
  )
}

export default Home