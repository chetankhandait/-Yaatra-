import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data/Data";
import BottomBar from "./BottomBar";
import Leaflet from "./Leaflet";
import HotelMAp from "./HotelMAp";
import PhotoCollage from "./PhotoCollage";
// import Date from './DateComponent';
import DateComponent from "./DateComponent";
import SpecialFeature from "./SpecialFeature";

const SepratePage = () => {
  const { productId } = useParams();
  const Hotel = Data.find((find) => find.id === productId);
  const { ...x } = Hotel;

  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateChange = (startDate, endDate) => {
    setSelectedDate({ startDate, endDate });
  };

  return (
    <div className="flex flex-col  text-left gap-3  ">
      <div className=" sm:hidden       ">
        <PhotoCollage {...Hotel} />
      </div>

      <Link to="/" className=" absolute underline left-1 top-1   lg:hidden">
        home
      </Link>
      <div className="flex flex-col px-4">
        <section>
          <h3 className="text-gray-500 font-semibold ">{x.name}</h3>
          <p className="text-blue-700  ">{x.description}</p>
          <h3>Capacity : 2 guest ,1 bathroom</h3>
          <h3>
            Review *(4.8 by the average value ) (yaha pe review count ayega ){" "}
          </h3>
        </section>
        <SpecialFeature />
        <section>Descripition</section>
        <div className="flex flex-col ">
          <h3>What this place Offer </h3>
          <ul>
            <li>Wifi</li>
            <li>Tv</li>
            <li>Indoor FirePlace </li>
            <li>CArbon Monoxide alarm </li>
            <li>Smoke alarm </li>
          </ul>
        </div>

        <BottomBar price={x.price} selectedDate={selectedDate} />

        <section className="flex items-center bg-green-700  w-7/12 ">
          {/* hotel owner  */}
          <img
            src="/src/assets/me.jpg"
            className="h-14 rounded-full w-14 object-cover "
          />
          <h4 className="text-white">{x.owner}</h4>
        </section>
        <div className="bg-blue-900">
          <HotelMAp location={x.geocode} />
        </div>
        <div className=" ">
          {/* date selctor  */}
          <DateComponent onDateChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
};

export default SepratePage;
