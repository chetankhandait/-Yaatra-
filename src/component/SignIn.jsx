import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      // Access user data from the result if needed
      // const user = result.user;
      console.log(result.user);
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
          type="password"
          placeholder=" Confirm Password"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
          className="w-full rounded-md shadow-sm  my-3 px-2 py-2"
        />
        <div className="button">
          <button
            className="w-full bg-blue-900 text-white p-2 rounded-md mb-2 hover:bg-blue-600"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button
            className=" w-full shadow-2xl my-2 "
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
          <span> Create an account?</span>
          <Link to="/sign-up" className="text-blue-700 underline pl-2">
            Sign up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
