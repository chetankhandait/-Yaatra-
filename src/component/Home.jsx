import Filter from "./Filter";
import HotelListing from "./HostelListing";
import Search from "./Search";
// import Data from "../Data/Data";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import PhotoCollage from "./PhotoCollage";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase-config";

const Home = () => {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/sign-in");
    }
  });
  // console.log(user)
  return (
    <div>
      <div className="w-full  font-mooli">
        <HeroSection />

        <Search />

        <div className="w-full   p-2.5 bg-white flex gap-4  mx-auto ">
          <Filter />
          <div className="flex flex-col ">
            <Navigation />
            <div className="flex flex-wrap">
              <div className=" absolute top-1 right-1 ">
                {user && (
                  <>
                    <div className="flex  items-center ">
                      <p className=" hidden  ">Hello {user.displayName}</p>
                      <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="h-11 object-cover rounded-full px-2 "
                      />
                    </div>
                    <button
                      className="border-blue-600 bg-slate-700  block hover:bg-blue-800  "
                      onClick={() => signOut(firebaseAuth)}
                    >
                      Log out
                    </button>
                  </>
                )}
              </div>

              <HotelListing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
