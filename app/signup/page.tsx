"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import ButtonFill from "../components/ButtonFill";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    // try {
    //   setLoading(true)
    //   const response = await axios.post("/api/users/signup", user)
    //   console.log("Signup success", response.data)
    //   router.push("/login")
    // } catch (error: any) {
    //   console.log("Signup failed", error.message)
    //   toast.error(error.message)
    // }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [user]);
  return (
    <>
      <Navigation></Navigation>
      <h1 className="text-[#f472b6] font-semibold text-4xl py-6 text-center">
        become a Star.
      </h1>
      <div className="flex justify-center mt-4  ">
        <div className="flex flex-col w-[400px] gap-2">
          <h1 className="text-4xl font-semibold">
            {loading ? "Processing..." : "Sign up"}
          </h1>
          <hr className="border-[#f472b6] border-2 mb-4" />
          <label htmlFor="username">Username</label>
          <input
            className="text-black border-2 rounded-full pb-[8px] pt-[10px] text-[14px] px-[20px] font-semibold"
            type="text"
            value={user.username}
            id="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
          />
          <label htmlFor="email">Email</label>
          <input
            className="text-black border-2 rounded-full pb-[8px] pt-[10px] text-[14px] px-[20px] font-semibold"
            type="text"
            value={user.email}
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="text-black border-2 rounded-full pb-[8px] pt-[10px] text-[14px] px-[20px] font-semibold mb-4"
            type="text"
            value={user.password}
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
          <div onClick={onSignup}>
            <ButtonFill text={buttonDisabled ? "FILL ALL FIELDS" : "SIGN UP"} />
          </div>
          <Link href="/login" className="text-[#f472b6] font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
