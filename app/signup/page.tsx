"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { registerIslamicCenter } from "../../redux/features/authAction";

const SignUpPage = () => {
  const [islamicCenterName, setIslamicCenterName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    let userCredential = {
      islamicCenterName,
      email,
      password,
      country,
      address,
      phoneNumber,
    };
    dispatch(registerIslamicCenter(userCredential));
  };

  const { loading, userInfo, error, success } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center capitalize">
      <form className="flex flex-col" onSubmit={handleSubmitEvent}>
        <label>Islamic Center Name</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="text"
          required
          value={islamicCenterName}
          onChange={(e) => setIslamicCenterName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Country</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="text"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Address</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          className="rounded-lg border-2 border-secondary-brown-normal shadow-primary-brown-light"
          type="text"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
