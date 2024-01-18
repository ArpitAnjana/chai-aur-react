import React from 'react';

function Card({ username, btnText = "visit me", age = 21 }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      <img
        src="https://i.pinimg.com/564x/88/10/ec/8810ec68d50572ede4e851d10a756902.jpg"
        alt="AirMax Pro"
        className="my-10 z-0 h-full w-full rounded-md object-fill bg-no-repeat"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          age: {age}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} &rarr;
        </button>
      </div>
    </div>
  );
}

export default Card;
