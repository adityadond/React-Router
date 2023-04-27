import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate ,useLocation} from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const loaction =useLocation()
  

  const redirecPath=loaction.state?.path || '/';
  const handleClick = () => {
    auth.login(user);
    navigate(redirecPath, { replace: true });

  };
  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
