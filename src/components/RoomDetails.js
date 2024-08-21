import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'

function RoomDetails() {
    const location = useLocation();
    const { room } = location.state;

    return (
        <>
        <nav>
                <div>
                    <div className='nav-con d-flex justify-content-between align-items-center'>
                        <div className='logo-home'>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Villas</Link></li>
                            <li><Link to="/">Special Offers</Link></li>
                            <li><Link to="/">Gallery</Link></li>
                            <li><Link to="/">Location</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav> <br></br>
        <div className="room-details">
            <h1 className="room-text">รายละเอียดห้องพัก</h1>
            <p>{room.info}</p>
            <p>ราคา :{room.price} บาท</p>
            <img className="room-container" src={room.image} alt="room.info"/>
            <button className="button btn-primary">Confirm Booking</button>
        </div>
        </>
    )
}

export default RoomDetails;