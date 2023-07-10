"use client";

import { useState } from "react";


const LoginPage = () => {
  const [islamicCenterName, setIslamicCenterName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    let userCredential = {
      islamicCenterName,
      password,
    };
  };

  return (
   

    
  );
};

export default LoginPage;
