import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, "login"]);
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="Text-center">redirecting to you in {count} second </h1>
      <MoonLoader color="hsla(168, 33%, 39%, 1)" size={50} />
    </div>
  );
};

export default Spinner;
