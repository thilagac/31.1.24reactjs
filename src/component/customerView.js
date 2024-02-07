import React from "react";
import {  useDispatch, useSelector} from "react-redux";
import { deleteCustomer } from "./CustomerSlice";

export default function CustomerView(){
 const customers =useSelector((state)=>state.customers)
  const dispatch= useDispatch();
  function deleteHandler(index){
    dispatch(deleteCustomer(index))
  }

return<>
<h3>Customer List</h3>
<ul style={{listStyle:'none'}}>{ customers.map((customer, index)=><li>{customer}<button onClick={()=>deleteHandler(index)}>Delete</button></li>)
    } 
   
 </ul>

</>

}