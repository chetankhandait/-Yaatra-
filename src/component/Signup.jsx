import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
// import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      // Access user data from the result if needed
      // const user = result.user;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className=" w-100% bg-[#f5deb3]   h-screen  text-center ">
      <section className="bg-blue-500 flex  justify-evenly items-center py-6 ">
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign up</Link>
      </section>
      <section className=" flex flex-col mx-auto items-center justify-between px-3  py-4 ">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
        />

        <input
          type="text"
          placeholder="Username"
          className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
        />
        <input
          type="password"
          placeholder=" Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
        />
        <div className="button">
          <button
            className="w-full bg-blue-900 text-white p-2 rounded-md mb-2 hover:bg-blue-600"
            onClick={handleSignup}
          >
            Sign up
          </button>
          <button
            className=" w-full shadow-2xl my-2 "
            onClick={handleGoogleSignup}
          >
            Sign up with Google
          </button>
          <span>Already have an account?</span>
          <Link to="/sign-in" className="text-blue-700 underline pl-2">
            Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signup;
