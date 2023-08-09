import React from "react";
import FillButton from "../../../components/button/FillButton";

export default function GetInTouch() {
  return (
    <div className="
      flex flex-col items-center justify-center min-h-screen py-2
      display: flex;
      padding: 64px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      border-radius: 10px;
      border: 4px solid var(--primary-orange-normal, #CE7D39); /* Augmentez la largeur de la bordure ici */
      background: var(--secondary-brown-light, #F5F2EE);
    ">
      <h1 className="text-[40px] font-sourceSerif font-normal text-primary-orange-darker mb-4">Get In Touch</h1>
      <div className="
                        w-[510px] h-[554px] px-[64px] py-[64px] bg-secondary-brown-light border-[2px] rounded-[10px] border-primary-orange-normal flex flex-col gap-[16px]
                        display: flex;
                        padding: 64px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 16px;
                        border-radius: 10px;
                        border: 2px solid var(--primary-orange-normal, #CE7D39);
                        background: var(--secondary-brown-light, #F5F2EE);
                        ">

<div className="
  w-[382px] h-[360px] px-[8px] py-[8px]
  flex flex-col  gap-[8px]
">
        <label htmlFor="name" className="block text-[18px] font-normal font-poppins text-secondary-brown-dark">
          Your name  
        </label>
        <input
  type="text"
  id="name"
  placeholder="Enter your name"
  className="
    mt-1 mb-2 px-4 py-2 w-[366px] h-[39px] rounded-md 
    border-2 border-secondary-brown-normal bg-primary-brown-light
    flex flex-col gap-[24px]
    border-radius-10px
    p-[14px 128px 14px 13px]
    border-2 border-secondary-brown-normal
    bg-primary-brown-light
    shadow-md
   font-medium font-poppins text-[16px] text-secondary-brown-normal-60-opacity
  "
/>
        <label htmlFor="email" className="block text-[18px] font-normal font-poppins text-secondary-brown-dark">
          Email address
        </label>
        <input
  type="text"
  id="email"
  placeholder="Enter your email"
  className="
    mt-1 px-4 py-2 w-[366px] h-[39px] rounded-md focus:ring focus:ring-indigo-200
    border-2 border-secondary-brown-normal bg-primary-brown-light
    flex flex-col gap-10
    border-radius-10px
    p-[14px 128px 14px 13px]
    border-2 border-secondary-brown-normal
    bg-primary-brown-light
    box-shadow-[1px 4px 16px 0px rgba(122, 105, 100, 0.05)]
     font-medium font-poppins text-[16px] text-secondary-brown-normal-60-opacity 
  "
/>

        <label htmlFor="message" className="block text-[18px] font-normal font-poppins text-secondary-brown-dark">
          Your message
        </label>
        <textarea
                                id="message"
                                placeholder="Enter your message"
                                className="
                                    mt-1 mb-2 px-4 py-2 w-[366px] h-[131px] p-[14px 128px 14px 13px] rounded-md focus:ring focus:ring-indigo-200
                                    border-2 border-secondary-brown-normal bg-primary-brown-light
                                    display-flex
                                    align-items-flex-start
                                    gap-10
                                    flex-1-0-0
                                    border-radius-10px
                                    box-shadow-[1px 4px 16px 0px rgba(122, 105, 100, 0.05)]
                                    font-medium font-poppins text-[16px] text-secondary-brown-normal-60-opacity
                                "
                                />
        </div>

        <div className="flex justify-center mt-10"> 
  <FillButton className="
  font-poppins font-semibold text-[20px] text-primary-orange-light
    flex items-center self-stretch justify-center
    w-[382px] h-[50px]
    px-[40px] py-[10px] rounded-[30px] 
    bg-primary-orange-normal"
    
    
  >
    Send
  </FillButton>
</div>


      </div>
    </div>
  );
}
