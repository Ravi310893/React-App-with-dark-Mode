import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../../../Assets/Images/logo.png'
import Background from '../../../../Assets/Images/bckg.jpg'

const Navbar = () => {
  const myStyle = {
    marginRight: "35px",
    textDecoration: "none",
    fontSize: "35px",
    position: "relative",
    left: "200px",
    color:'cyan'
    
  };

  const navStyle={backgroundImage:`url(${Background})`}

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light" style={navStyle}>
        <img src={Logo} alt="no img" style={{height:'100px', width:'150px',marginLeft:'25px'}}/>
          <NavLink to="/" style={myStyle}>
            World-News
          </NavLink>
          <NavLink to="/" style={myStyle}>
            Indian-Politics
          </NavLink>
          <NavLink to="/" style={myStyle}>
            Business
          </NavLink>
          <NavLink to="/" style={myStyle}>
            Health
          </NavLink>
        </nav>
        <marquee direction='left' bgcolor='red' style={{position:'sticky',top:'0'}}>
          <span style={{color:'white'}}>Breaking News!</span>---Kejriwal Aap Wins With a Huge Margin.&nbsp;&nbsp;
          <span style={{color:'white'}}>Breaking News!</span>---Indian Army Acquire TATA Kestrel For Ladakh Terrain.&nbsp;&nbsp;
          <span style={{color:'white'}}>Breaking News!</span>---Nupur Sharma Controversy:world Reacts.&nbsp;&nbsp;
          <span style={{color:'white'}}>Breaking News!</span>---India Wins Gold In Badminton In Common wealth Games.&nbsp;&nbsp;
          <span style={{color:'white'}}>Breaking News!</span>   ---Indian Navy Pitches for 3rd Aircraft Carrier.&nbsp;&nbsp;
        </marquee> 
      </div>
    </>
  );
};

export default Navbar;
