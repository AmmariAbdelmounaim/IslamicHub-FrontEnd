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
    <div className="flex items-center justify-center capitalize ">
      <form className="flex flex-col" onSubmit={handleSubmitEvent}>
        <label>Email</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="email"
          required
          value={islamicCenterName}
          onChange={(e) => setIslamicCenterName(e.target.value)}
        />
        <label>Password</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="password"
          required
          value={password}
          onChange={(e) => setIslamicCenterName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
