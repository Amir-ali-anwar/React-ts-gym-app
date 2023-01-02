import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  const [TopScroll, SetTopScroll] = useState<boolean>(true);
  const handleScroll = () => {
    if (window.screenY === 0) {
      SetTopScroll(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.screenY !== 0) {
      SetTopScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App gray-50 secondary-500">
      <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} TopScroll={TopScroll} />
    </div>
  );
}

export default App;
