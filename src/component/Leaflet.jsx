import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import Data from '../Data/Data';
import { Link } from 'react-router-dom';
const Leaflet = () => {



  // console.log(Data.name)
  const customIcon = new Icon({
    iconUrl: "https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif",
    iconSize: [58, 58]
  });

  return (
    <MapContainer center={[23.235988149932513, 77.40181448233571]} zoom={13}  >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Data.map((data, index) => (
        <Marker key={index} position={data.geocode} icon={customIcon} className="border" >

          <Popup className='font-mooli'  >
            <img src={data.img} alt="" />
            <h3 className='font-semibold  '>{data.name}</h3>
            <h4 >{data.rooms}</h4>
            <h5>{data.type}</h5>
            <button className='bg-black text-white px-3 py-1 font-mooli my-1  ' > <Link to={`/detail/${data.id}`}>  Learn More</Link></button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Leaflet;
