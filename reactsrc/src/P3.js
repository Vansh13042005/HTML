import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function P3() {
     const [a, setProducts] = useState([
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ])
      const navigate = useNavigate(); 
  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ margin: '1rem 0' }}>
        ← Back
      </button>
      {a.map((setproducto) => (
        <div className="" key={setproducto.title}>
          <h3>{setproducto}</h3>

        </div>
      ))}
    </div>
  )
}
