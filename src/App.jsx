import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Card from './Card/Card'

function App(){
  return(
    <>
     <Navbar />
     <Footer />
     <div className='cards'>
     <Card name="fried chicken" details="high quality fried chicken" price="5.99$"/>
     <Card name="french fries" details="high quality potato fries"/>
     <Card name="fried chicken" details="high quality fried chicken"/>
     <Card name="fried chicken" details="high quality fried chicken" button="add to cart"/>
     </div>
    </>
  )
}
export default App;
