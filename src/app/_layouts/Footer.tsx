import React from 'react'

export const Footer: React.FC<any> = (): JSX.Element => {
  return (
    <div className="w-full text-grey px-0 py-[25px] bg-lightGrey">
      <div className="container flex justify-between flex-wrap">
        <ul className="list-none flex flex-wrap m-0 p-0">
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px] border-r-[#9e9e9e] border-r border-solid">
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px] border-r-[#9e9e9e] border-r border-solid">
            <a href="/advertiser-info">Advertising Opportunities</a>
          </li>
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px] border-r-[#9e9e9e] border-r border-solid">
            <a href="#">Register</a>
          </li>
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px] border-r-[#9e9e9e] border-r border-solid">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px] border-r-[#9e9e9e] border-r border-solid">
            <a href="/about-us">About Us</a>
          </li>
          <li className="flex justify-center items-center h-[15px] m-0 p-[7px]">
            <a title="Terms and Conditions" href="/help-and-information">
              Terms and Conditions
            </a>
          </li>
        </ul>
        <span>© Melt</span>
      </div>
    </div>
  )
}
