import React from "react";
import { Link, NavLink } from "react-router-dom";
import Data from "../Data/Data";
import PhotoCollage from "./PhotoCollage";
import Slider from "react-slick";
// import SepratePage from './SepratePage';

const HotelListing = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="flex flex-wrap flex-1 items-center justify-center ">
      {
        // console.log(Data)
        Data.map((k) => {
          {
            // console.log(k.img);
          }
          return (
            <Link to={`/detail/${k.id}`}>
              <div className="  my-2  rounded-md">
                <img
                  src={k.img}
                  alt=""
                  className="h-[312px] rounded-md object-cover sm:h-[210px] "
                />
                {/* <PhotoCollage {...k} /> */}
                <div>
                  <ul>
                    <li className="font-bold">{k.name}</li>
                    <li>{k.type}</li>
                    <li>{k.rooms}</li>
                  </ul>
                </div>

                {/* <h2 className='bg-black text-slate-100 px-2 py-2 rounded-md  text-center cursor-pointer'> Know more   </h2> */}
              </div>
            </Link>
          );
        })
      }
    </div>
  );
};

export default HotelListing;
