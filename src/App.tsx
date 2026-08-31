import './App.css'
import Batter from './Batter';
import Counter from './Counter';



function App() {

//   const handleClick=()=>{
//     alert('click me 3')
//   }
// const handleAddToCart=(id)=>{
//   alert('buying item'+ id)



  return (
    <>
    
    <Counter></Counter>
    <Batter></Batter>
    {/* <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick}>Click Me3</button>
    <button onClick={()=>alert('click me 4')}>Click Me 4</button>
    <button onClick={()=> handleAddToCart(65)}>Buy this</button> */}
    </>
  );
}

export default App;

