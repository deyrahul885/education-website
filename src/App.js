import './App.css';
import Home from './pages/Home';


function App() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <>
    <button className='btn back_To_Top ' onClick={scrollToTop} style={{position: 'fixed',right: '10px',bottom: '40px',padding:'1px 6px'}} ><h2><i class="ri-arrow-up-line"></i></h2></button>
    <Home/>
    </>
  );
}

export default App;
