import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import NavBar from "./assets/Components/NavBar";
import OrderSummary from "./assets/Components/OrderSummary";
import Nomatch from "./assets/Components/Nomatch";
import Products from "./assets/Components/Products";
import FetauredProducts from "./assets/Components/FetauredProducts";
import New from "./assets/Components/New";
import Users from "./assets/Components/Users";
import Admin from "./assets/Components/Admin";
import UserDetails from "./assets/Components/UserDetails";
import Profile from "./assets/Components/Profile";
import { AuthProvider } from "./assets/Components/Auth";
const LazyAbout = React.lazy(() => import("./assets/Components/About"));
import Login from './assets/Components/Login';
import { RequireAuth } from "./assets/Components/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<FetauredProducts />}></Route>
            <Route path="featured" element={<FetauredProducts />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Nomatch />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
