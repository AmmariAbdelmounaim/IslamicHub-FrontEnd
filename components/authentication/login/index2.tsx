import React, { useState, ChangeEvent } from 'react';
import FillButton from '../../button/FillButton';
import Logo from '../../logo';

const IndexPage = () => {
  const [searchValue1, setSearchValue1] = useState('');
  const [searchValue2, setSearchValue2] = useState('');

  const handleSearch1 = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue1(event.target.value);
  };

  const handleSearch2 = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue2(event.target.value);
  };

  const handleContinue = () => {
    // Logique pour continuer ou naviguer vers la prochaine page
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <Logo></Logo>
        
      </div>
      <header className="text-center">
        <h1 className="text-2xl font-sourceSerif">Join IslamicHub</h1>
      </header>
      <header className="text-center">
        <h2 className="Poppins/18px/regular text-secondary-brown-normal">
          Enter Your Details Bellow
        </h2>
      </header>

      <div className="mt-4">
        <h3 className="Poppins/18px/regular">Islamic Center name</h3>
        <input
          type="text"
          placeholder="This Will Be The User Name"
          value={searchValue1}
          onChange={handleSearch1}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>

      <div className="mt-4">
        <h3 className="Poppins/18px/regular">Currency</h3>
        <input
          type="text"
          placeholder="Enter Your Password"
          value={searchValue2}
          onChange={handleSearch2}
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <FillButton type="submit" additionalStyle=" py-2 px-4">
          Continue
        </FillButton>
      </div>

      <div className="flex justify-center mt-4">
        <p className="Poppins/16px/medium">
          You have an account?{" "}
          <a href="#" className="text-primary-orange-normal Poppins/16px/medium">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
