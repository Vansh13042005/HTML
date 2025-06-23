import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Productlist5() {
    const[v,r]=useState([{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }])
      const navigate = useNavigate(); 
  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ margin: '1rem 0' }}>
        ← Back
      </button>
      {v.map((item) => (
        <div className="product-card" key={item.userId}>
        <h3>{item.id}</h3>
          <h3>{item.title}</h3>
          <p className="body">{item.body.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  )
}
