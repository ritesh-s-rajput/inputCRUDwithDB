import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./nav.module.css"

const Edituser = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let navigator=useNavigate()

  let{index} = useParams()
    // console.log(index)

  useEffect(()=>{
   axios.get(`http://localhost:3000/users/${index}`)
   .then((resp)=>{
    console.log(resp.data)
    setName(resp.data.name)
    setSalary(resp.data.salary)
    setCompany(resp.data.company)
   }) 
  },[])

  let nameData=(e)=>{
    setName(e.target.value)
  }
let salaryData=(e)=>{
    setSalary(e.target.value)
  }
let companyData=(e)=>{
    setCompany(e.target.value)
  }

  let updateForm=(e)=>{
    e.preventDefault()
    let payload ={name,salary,company}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
      console.log("data has been updated")
    })
    navigator("/user")
  }

  return (
    <div id={style.myform}>
    <form action="">
        <tr>
            <th colSpan="2"><h4>Update User Details</h4></th>
        </tr>
        <tr>
            <td><label htmlFor="">Name</label></td>
            <td> : <input type="text" value={name} onChange={nameData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="">Salary</label></td>
            <td> : <input type="text" value={salary} onChange={salaryData}/></td>
        </tr>
        <tr>
            <td><label htmlFor="">Company</label></td>
            <td> : <input type="text" value={company} onChange={companyData}/></td>
        </tr>
        <tr>
            <th colSpan="2"><button onClick={updateForm}>Update</button></th>
        </tr>
    </form>
</div>     
  )
}

export default Edituser
