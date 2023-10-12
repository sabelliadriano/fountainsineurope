import React from "react";

function Navbar(){
    return(
        <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <form className="search-bar" >
        <input 
          type="text" 
          placeholder="Search your fountain here babyyyy..." 
         // value={searchTerm}
         //onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    );
}

export default Navbar;