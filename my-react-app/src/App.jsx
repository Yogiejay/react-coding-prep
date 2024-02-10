// import { useState } from 'react'
import './App.css'

import { useState } from "react";

// function App() {
// const [dataArray , setdataArray] = useState(["play cricket" , "play video game","read book"]);
// const [isChecked , setisChecked] = useState(false);
// const [index , setindex] = useState();
// const handleDelete = (e)=>{
//   const newArray = dataArray.filter((element)=>e !== element)
//     setdataArray(newArray);
//     setisChecked(false);
// }
// const handleCheckbox = (i)=>{
   
//   setisChecked(!isChecked);
//   setindex(i);
// }
//   return (
//     <>
//     {dataArray.map((e,i)=>{
//       return (
//       <li style={{listStyle:"none"}}>
//         <input type="checkbox" onChange={()=>{handleCheckbox(i)}}/>
//           {e} 
//           {/* <button style={{ display: isChecked ?  "visible" : "hidden" }} onClick={()=>{handleDelete(e)}}>Delete</button> */}
//           {/*isChecked &&*/ i===index && (
//             <button onClick={() => handleDelete(e)}>Delete</button>
//           )}
//       </li>
//       )
//     })}
//     </>
//   )
// }

// export default App

// function App (){
//   const [name , setName] = useState();
//   const [email , setEmail] = useState();
//   const handleSubmit = (e)=>{
//     console.log(name)
//     console.log(email)
//     e.preventDefault()
//   };
//   return (
//     <div>
//       <form>
//       Name : <input type="text" value = {name} onChange = {(e)=>{setName(e.target.value)}}/><br/>
//       Email :  <input type="text" value = {email} onChange = {(e)=>{setEmail(e.target.value)}}/>
//       <br/>
//       <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   )

// }
// export default App

export default function App (){
  const options = ["cricket" , "football" , "hockey"];
  const days = ["weekday" , "weekend"];
  const [game , setGame] = useState();
  const [day , setDay] = useState();
return (
<div className="option">
  <div className="left">
  {options.map((ele) => (
    <div /*key={ele}*/>
      <input type="radio" /*id={ele} name="options"*/ name = "sport" onChange={()=>{setGame(ele)}}/>
      <label /*htmlFor={ele}*/>{ele}</label>
    </div>
  ))}
  </div>
  <div className="right">
  {days.map((ele)=> {
      return (
        <div>
      <input type = "radio" name = "day" value = {ele} onChange={(e)=>{setDay(e.target.value)}}/>
      <label>{ele}</label>
      </div>
    )
    })}
  </div>    
<p className='stmt'> I will play {game} on {day}</p>

</div>

)};
