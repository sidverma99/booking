import React from 'react'
import "./searchItem.css"
import { Link } from 'react-router-dom';

function SearchItem({item}) {
  return (
    <div className='searchItem'>
        <img src={item.images[0]} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance} from center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubTitle">Studio Apartment with AC</span>
            <span className="siFeatures">{item.desc}</span>
            <span className='siCancelOp'>Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later so lock in this great price today!</span>
        </div> 
        <div className="siDetails">
            {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailsTexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes Tax and prices</span>
                <Link to={'/hotels/'+item._id} ><button className='siCheckButton'>See Availability</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem