

// callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
// })

import { use } from "react";
import UserCard from "./UserCard";

// // async await
// async function loadData(){const res=await fetch('https://jsonplaceholder.typicode.com/users');
// const data=await res.json();
// console.log(data);
// }

// const loadData2=async()=>{
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
//     console.log(data);
// }

/*
* 1. suspense fallback
* 2. create a promise function to load data
 * 3. send the promise to the component to load data
 * 
 * 4.
 */

 
 
 function Users({usersDataPromise}){
    const users=use(usersDataPromise);
    console.log(users);
    return(
        <div>
            <h1>Users: {users.length}</h1>
            {
                users.map(user=> <UserCard user={user}></UserCard>)
            }
           
        </div>
    )
 }
 export default Users;