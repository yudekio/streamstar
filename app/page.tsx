import Image from "next/image"
import Navigation from "./components/Navigation"
import LeftBar from "./components/LeftBar"
import MainPage from "./components/MainPage"
import RightBar from "./components/RightBar"

export default function Home() {
  function prefix(arr: any[]) {
    let result: any[] = []
    const repeatingSet = new Set(
      arr.filter((item, index) => arr.indexOf(item) !== index)
    )
    return repeatingSet
  }
  const arr = ["hi123", "hiadf", "hiimtheproblem"]
  console.log(prefix(arr))
  return (
    <>
      <Navigation />
      <div className="flex">
        <LeftBar />
        <MainPage />
        <RightBar />
      </div>
    </>
  )
}
