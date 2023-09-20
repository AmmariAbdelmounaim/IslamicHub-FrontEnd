import React from "react";

function Messages() {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="font-poppins capitalize text-secondary-brown-darker text-[24px]">
          messages from people
        </h1>
        <p className="font-poppins text-primary-orange-dark-active text-[18px] capitalize">
          in this section you can see messages from people and their contact
          information.
        </p>
      </div>

      <div className="relative  rounded-[10px] border-[2px] border-secondary-brown-normal-30-opacity ">
        <table className="w-full text-[18px] text-left font-poppins  text-primary-orange-dark-active ">
          <thead className="text-[20px] font-poppins text-primary-orange-darker border-b border-b-secondary-brown-normal-30-opacity  capitalize">
            <tr>
              <th scope="col" className="px-[16px] py-3">
                Name
              </th>
              <th scope="col" className=" py-3">
                Email
              </th>
              <th scope="col" className=" py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="px-8 py-4 border-b border-dashed border-secondary-brown-normal-30-opacity">
              <th
                scope="row"
                className="px-[16px] font-medium text-gray-900 whitespace-nowrap "
              >
                Altair al-Badawi
              </th>
              <td className=" py-4 border-b border-dashed border-secondary-brown-normal-30-opacity">
                altair.arz@gmail.com
              </td>
              <td className=" py-4 border-b border-dashed border-secondary-brown-normal-30-opacity">
                Swift and stealthy, we&apos;ll carve our fate in shadows.
              </td>
            </tr>
            <tr className=" border-b border-dashed border-secondary-brown-normal-30-opacity">
              <th
                scope="row"
                className=" px-[16px] font-medium text-gray-900 whitespace-nowrap "
              >
                Benyamin Haadi
              </th>
              <td className=" py-4 "> benyamin.assassin@gmail.com</td>
              <td className=" py-4">
                The Arz&apos;s secrets await. Let&apos;s unravel its mysteries
                together.
              </td>
            </tr>
            <tr className="px-8 py-4 ">
              <th
                scope="row"
                className=" px-[16px] font-medium text-gray-900 whitespace-nowrap "
              >
                kifah darwish
              </th>
              <td className=" py-4 ">kifah.lion@gmail.com</td>
              <td className=" py-4 ">
                Courage is our armor. Through adversity, we shall triumph.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Messages;
