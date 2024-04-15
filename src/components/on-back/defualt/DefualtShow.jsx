import React from "react";
// import Icon from "../../../../public";
const DefualtShow = () => {
  return (
    <div className="first-bg-color w-full h-[100vh] p-10 text-center ">
      <div className="flex justify-center items-center h-[95%]">
        <div className="items-center relative">
          <div className="flex justify-center">
            <img
              src="https://static.whatsapp.net/rsrc.php/v3/yX/r/dJq9qKG5lDb.png"
              alt=""
            />
          </div>
          <h1 className=" text-color-h1  mt-8 font-light text-3xl">
            Download WhatsApp for Windows
          </h1>
          <p className="text-color-p mb-2 mt-4 text-sm">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>
          <button className="defualt-btn-color font-medium  px-5 py-2 rounded-full mt-5">
            Get from Microsoft Store
          </button>
        </div>
      </div>
      <div className="text-color-footer flex flex-1 items-center justify-center text-sm gap-2">
        <span className="mt-[2px]">
          <svg
            viewBox="0 0 10 12"
            height="12"
            width="10"
            preserveAspectRatio="xMidYMid meet"
            class=""
            version="1.1"
          >
            <title>lock</title>
            <path
              d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        Your personal messages are end-to-end encrypted
      </div>
    </div>
  );
};

export default DefualtShow;
