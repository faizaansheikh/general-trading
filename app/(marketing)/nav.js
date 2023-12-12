import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <>
      {/* <div className="flex justify-between">
        <div className="flex mt-5 ml-20">
          <div>
            <h2 className="text-center text-maincolor font-bold text-[30px] ">
              Logo
            </h2>
          </div>
          <div className="flex mt-3 ml-10">
            <Link href={"/"} className="pr-4 pl-4">
              Features
            </Link>
            <Link href={"/"} className="pr-4 pl-4">
              Pricing
            </Link>
            <Link href={"/"} className="pr-4 pl-4">
              Blog
            </Link>
            <Link href={"/"} className="pr-4 pl-4">
              Documentation
            </Link>
          </div>
        </div>

        {/* ======= */}
        {/* <div className="mt-5 mr-20">
            <button className="bg-loginbg pt-3 pb-3 pr-5 pl-5 font-medium">Login</button>
        </div> */}
   
    </>
  );
}

export default Nav;
