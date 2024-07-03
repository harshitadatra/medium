import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
export const Redirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/signin");
    } else {
      navigate("/signup");
    }
  });

  return <Spinner />;
};
