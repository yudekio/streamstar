import Navigation from "./components/Navigation";
import LeftBar from "./components/LeftBar";
import MainPage from "./components/MainPage";
import RightBar from "./components/RightBar";

export default function Home() {
  function prefix(arr: any[]) {
    let result: any[] = [];
    const repeatingSet = new Set(
      arr.filter((item, index) => arr.indexOf(item) !== index)
    );
    return repeatingSet;
  }
  return (
    <>
      <Navigation />
      <div className="flex">
        <LeftBar />
        <MainPage />
        <RightBar />
      </div>
    </>
  );
}
