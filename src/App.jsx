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
     <Card title="this is card 1" descreption="card 1 descreption" />
     <Card title="this is card 2" descreption="card 2 descreption" />
     <Card title="this is card 3" descreption="card 3 descreption" button="add to cart"/>
     <Card title="this is card 4" descreption="card 4 descreption"/>
     </div>
    </>
  )
}
export default App; 
