
import React,{ useEffect, useState } from 'react';
import axios from 'axios';

export default function Registration() {

  const [firstName, setFirstName] = useState("supriya")
  const [lastName, setLastName] = useState("test")
  const [user, setUser] = useState([]);

  const clearTheForm = () => {
    setFirstName("")
  }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        alert(" id= " + response.data.id);
        alert(" title =" + response.data.title);
        console.log(response.data.body);
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])


  const submitClaim = (e) => {
    //alert(""+ e.target.value);
    alert(" first name ==  " + firstName);
    //alert(" lastName name ==  "+lastName);
    // rest --> calll 
  }

  return (
    <form onSubmit={submitClaim}>
      <div>

        {user.length > 0 && (
          <div>
            
            {user.map(localuser => (
              <li key={localuser.id}>
                <h6>userId = {localuser.userId}</h6>
                <h6>id = {localuser.id}</h6>
                <h6>title = {localuser.title}</h6>
                <h6>body = {localuser.body}</h6>
              </li>
            ) )
            }
        </div>
        )
      }
        <h1>this is first reactjs </h1>
        First Name  <input type="text" name="firstName" value={firstName}
          onChange={(e) => { setFirstName(e.target.value) }}

        /><br /><br />
        Last Name  <input type="text" name="lastName" value={lastName}
          onChange={(e) => { setLastName(e.target.value) }} /><br /><br />
        Register customer  <input type="submit" value="Register Customer" /><br />
      </div>
    </form>
  );
}

