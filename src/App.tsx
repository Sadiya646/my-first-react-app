import { Suspense } from 'react';
import './App.css'
import Batter from './Batter';
import Counter from './Counter';
import Users from './Users';

const usersDataPromise= async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users');
const data= await res.json();
return data;
}

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
   <Suspense fallback={<p>Loading Users...</p>}>
     <Users usersDataPromise={usersDataPromise()}></Users>
   </Suspense>
  
    {/* <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick}>Click Me3</button>
    <button onClick={()=>alert('click me 4')}>Click Me 4</button>
    <button onClick={()=> handleAddToCart(65)}>Buy this</button> */}
    </>
  );
}

export default App;

