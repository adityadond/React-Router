import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
import { AiFillHome } from "react-icons/ai";

function NavBar() {
    const auth=useAuth()
  return (
    <nav className="navbar">

      <NavLink to="/" style={{display: 'flex', alignItems: 'center'}}><AiFillHome size={20} color="black"/>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {
        !auth.user &&(
            <NavLink to="/login"> Login</NavLink>
        )
    }
    </nav>
   
  );
}

export default NavBar;
