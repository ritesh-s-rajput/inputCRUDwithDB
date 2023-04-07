import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./nav.module.css"
import {Link} from "react-router-dom"

const User = () => {
  let [content,setContent]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
  .then((res)=>{
    setContent(res.data)
   })
  },[])

  let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    window.location.assign("/user")
  }
  return (
    <div id={style.userPage}>
        {content.map((x)=>{
          return(
            <div id={style.card}>
              <table>
                <tr>
                  <th colSpan="2">User Details</th>
                </tr>
                <tr>
                  <td><h4>Name</h4></td>
                  <td><h4>:{x.name}</h4></td>
                </tr>
                <tr>
                <td><h4>Salary</h4></td>
                  <td><h4>:{x.salary}</h4></td>
                </tr>
                <tr>
                <td><h4>Company</h4></td>
                  <td><h4>:{x.company}</h4></td>
                </tr>
                <tr>
                  <td>
                    <Link to={`/edit/${x.id}`}>EDIT</Link>
                  </td>
                  <td>
                    <button onClick={()=>{deleteData(x.id)}} >DELETE</button>
                  </td>
                </tr>
              </table>
            </div>
          )
        })}
    </div>
  )
}

export default User
