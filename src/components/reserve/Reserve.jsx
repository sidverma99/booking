import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import "./reserve.css";
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Reserve({setOpen, hotelId}) {
    const [selectedRooms, setSelectedRooms]=useState([]);
    const {data, loading, error}=useFetch(`/hotels/room/${hotelId}`)
    const {dates } =useContext(SearchContext);
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const dates = [];
        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };
    const handleSelect=(e)=>{
        const selected=e.target.checked;
        const value=e.target.value;
        setSelectedRooms(selected?[...selectedRooms, value]: selectedRooms.filter(item=>item!==value))
    }
    const allDates=(getDatesInRange(dates[0].startDate,dates[0].endDate));

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        );
    
        return !isFound;
    };
    const navigate=useNavigate();
    const handleClick=async()=>{
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                const res = axios.put(`/rooms/availability/${roomId}`, {
                    dates: allDates,
                });
                return res.data;
            })
            );
        } catch (err) {}
    }

    return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={()=>setOpen(false)} /> 
            <span>Select your rooms</span>
            {data.map(item=>(
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    {item.roomNumber.map(roomNumber=>(
                        <div className="room">
                            <label htmlFor="">{roomNumber.number}</label>
                            <input type="checkbox" disabled={!isAvailable(roomNumber)} value={roomNumber._id} onChange={handleSelect}/>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleClick} className='rButton'>Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve