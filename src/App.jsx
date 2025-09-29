import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Card from './Card/Card'
import { useState } from 'react'


function Counter(){
  const [count, setCount] = useState(0);
   
  const resetBtn = () =>{
    setCount(0);
  }

  return(
    <div>
      <h1>counter: {count}</h1>
      <button onClick={() => setCount(count + 3)}>increment</button>
      <button onClick={() => setCount(count - 3)}>decrement</button>
      <button onClick={resetBtn}>reset</button>
    </div>
  )

    // <>
    //  <Navbar />
    //  <Footer />
    //  <div className='cards'>
    //  <Card name="fried chicken" details="high quality fried chicken" price="5.99$"/>
    //  <Card name="french fries" details="high quality potato fries"/>
    //  <Card name="fried chicken" details="high quality fried chicken"/>
    //  <Card name="fried chicken" details="high quality fried chicken" button="add to cart"/>
    //  </div>
    // </>
  
}
export default Counter;
