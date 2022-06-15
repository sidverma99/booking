import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featuredProporties.css"

function FeaturedProporties() {
  const {data, loading, error} = useFetch("/hotels?featured=true&limit=8");

  return (
    <div className='fp'>
      {loading? "Loading":
        (<>
          {data.map((item)=>(
            <div className="fpItem" key={item._id}>
            <img src={item.images[0]} alt="" className="fpImg" />
            <div className="fpName">{item.name}</div>
            <div className="fpCity">{item.city}</div>
            <div className="fpPrice">Starting from ${item.cheapestPrice}</div>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
          ))}
        </>)
      }
    </div>
  )
}

export default FeaturedProporties