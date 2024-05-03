import React, {useState} from 'react';
import Navbar from "./Components/Navbar"
import Newsb from "./Components/Newsb"
// import Newsi from "./Components/Newsi"



const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsb category={category}/>
    </div>
  )
}

export default App
// npm run dev for starting the server