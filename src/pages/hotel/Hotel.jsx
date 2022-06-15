import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/Footer/Footer"
import "./hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

const Hotel = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const [openModal,setOpenModal]=useState(false);
  const navigate=useNavigate();
  const {data, loading, error} = useFetch(`/hotels/find/${id}`);
  const {user}=useContext(AuthContext);
  const {dates, options}=useContext(SearchContext)
  const MILLISECONDS_PER_DAY=1000*60*60*24;
  function dayDiff(date1,date2){
    const timeDiff = Math.abs(date2.getTime () - date1.getTime ()) ;
    const diffDays = Math.ceil(timeDiff /MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days=dayDiff(dates[0].endDate,dates[0].startDate)
  console.log();
  console.log(days);

  const handleClick=()=>{
    if(user){
      setOpenModal(true);
    } else{
      navigate("/login")
    }
  }
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove=(dir)=>{
    let newSlideNumber;
    if(dir==="l"){
      newSlideNumber=slideNumber===0?8:slideNumber-1;
    } else{
      newSlideNumber=slideNumber===8?0:slideNumber+1;
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      {loading? ("Loading") : (<div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")} />
        <div className="slideWrapper">
          <img src={data.images[slideNumber]} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">Excellent location - {data.distance} from center</span>
          <span className='hotelPriceHighlight' >Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {data.images?.map((photo,i)=>(
              <div className="hotelImgWrapper" key={i}>
                <img src={photo} alt="" className="hotelImg" onClick={()=>handleOpen(i)} />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className='hotelTitle' >{data.title}</h1>
              <p className="hotelDesc">{data.desc}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days} night stay</h1>
              <span>Located in real heart of Bhopal, this property has an excellent location score of 9.8</span>
              <h2><b>$ {days * data.cheapestPrice*options.room }</b>({days} Nights) </h2>
              <button onClick={handleClick}>Book Now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel