import { useState } from "react"
import CustomerView from "./customerView";
import { addcustomer as addCustomerAction } from "./CustomerSlice";
import { UseDispatch, useDispatch } from "react-redux";

export default function CustomerAdd(){
const[input,setinput]=useState("")
const [customer,setCustomer]=useState([]);
const dispatch=useDispatch();
function addCustomer(e){
    e.preventDefault()
    if(input){
        // setCustomer((previousState)=>[...previousState, input])
      dispatch(addCustomerAction(input))
        setinput("");
    }
}
return<>
<h2>Add the Customer Name</h2>
   
{/* <form onSubmit={(e)=>addCustomer(e)}> */}
<form>

    <input type="text" value={input} onChange={(event)=>setinput(event.target.value)}/>
  
    <button onClick={(e)=>addCustomer(e)} >Add</button>
</form>
{/* </form> */}

</>

}