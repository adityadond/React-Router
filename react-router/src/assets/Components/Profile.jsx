import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast=()=>{
  return (
    <div>
      Something went wrong!
      <button onclick={close}>Close</button>
    </div>
  )
}

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const notify = () => {
    toast("Basic notify", { position: toast.POSITION.TOP_LEFT, autoClose:8000 });
    toast.info("Basic notify", { position: toast.POSITION.TOP_CENTER });
    toast.success("Basic notify", { position: toast.POSITION.TOP_RIGHT, autoClose:false });
    toast.warn(<CustomToast/>, { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Basic notify", { position: toast.POSITION.BOTTOM_CENTER });
  };
  return (
    <div>
      Welcome {auth.user}!<button onClick={handleLogout}>Logout</button>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Profile;
