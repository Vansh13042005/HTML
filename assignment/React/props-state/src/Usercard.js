import React from 'react'

 function Usercard({name,age,location}) {
  return (
    <div>
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>location:{location}</h2>
    </div>
  )
}
export default Usercard;