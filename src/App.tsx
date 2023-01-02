import Navbar from "@/components/Navbar";
import { useState } from "react";
  
function App() {
  const [selectedPage,setSelectedPage]= useState<string>('Home')
  return <div className="App gray-50 secondary-500">
    <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} /> 
  </div>;
}

export default App
