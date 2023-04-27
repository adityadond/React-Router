import React from "react";
import { Link,Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <input type="text" placeholder="Type something" />

      <nav className="navbar">
        <Link to="featured"> Featured</Link>
        <Link to="new"> New</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Products;
