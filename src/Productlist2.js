import React from 'react'
import { Link } from 'react-router-dom';
export default function Prodcutlist2({data}) {

  return (
      <div className='container'>
        {
            data.map((item)=>{
                return (
                    <div className="product-card">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="product-image" 
                    />
                    <Link to={`/product/${item.id}`} ><h3 className="product-title">
                        {item.title}
                    </h3>
                    </Link>
                    <p className="product-description">
                        {item.description}
                    </p>
                    <p className="product-price">₹{item.price}</p>
                    <p className="product-category">Category: {item.category}</p>
                    <p className="product-rating">⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
                    
                    </div>
                )
            })
        }
      </div>
  )
}