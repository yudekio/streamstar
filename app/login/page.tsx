"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"
import Navigation from "../components/Navigation"
import ButtonFill from "../components/ButtonFill"

const Login = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLodaing] = useState(false)

  const onLogin = async () => {
    try {
      setLodaing(true)
      const response = await axios.post("/api/users/login", user)
      console.log("Login success", response.data)
      toast.success("Login success")
      router.push("/profile")
    } catch (error: any) {
      console.log("Login failed", error.message)
      toast.error("Login failed. Please check your credentials and try again.")
    } finally {
      setLodaing(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])
  return (
    <>
      <Navigation></Navigation>
      <h1 className="text-[#f472b6] font-semibold text-4xl py-6 text-center">
        become a Star.
      </h1>
      <div className="flex justify-center mt-4  ">
        <div className="flex flex-col w-[400px] gap-2">
          <h1 className="text-4xl font-semibold">
            {loading ? "Processing..." : "Log in"}
          </h1>
          <hr className="border-[#f472b6] border-2 mb-4" />
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
          <div onClick={onLogin}>
            <ButtonFill text="LOG IN"></ButtonFill>
          </div>
          <Link href="/signup " className="text-[#f472b6] font-semibold">
            Sign up
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
