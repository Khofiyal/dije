"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// const getTimeLeft = (expiry: string): TimeCount => {
//   let days = "0";
//   let hours = "0";
//   let minutes = "0";
//   let seconds = "0";

//   const difference = new Date(expiry).getTime() - new Date().getTime();

//   if (difference <= 0) {
//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }

//   const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
//   const mnt = Math.floor((difference / (1000 * 60)) % 60);
//   const snd = Math.floor((difference / 1000) % 60);

//   days = dys < 10 ? `0${dys}` : dys.toString();
//   hours = hrs < 10 ? `0${hrs}` : hrs.toString();
//   minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
//   seconds = snd < 10 ? `0${snd}` : snd.toString();

//   return {
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// };

const Timer = ({ WeddingDate }: { WeddingDate: string }) => {
  
  // const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(WeddingDate));

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft(getTimeLeft(WeddingDate));
  //   }, 1000);
  // }, [WeddingDate]);

    const launchDate = new Date(WeddingDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60 ) % 24)),
          minutes: Math.floor((distance / (1000 * 60 ) % 60)),
          seconds: Math.floor(((distance / 1000) % 60)),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="flex justify-center lg:justify-start lg:gap-16 gap-3 font-regular">
      <span className="flex flex-col justify-center items-center bg-black/50 text-white text-2xl lg:text-5xl lg:w-28 w-15 lg:py-5 py-2 shadow-lg rounded-lg backdrop-blur-sm">
        {timeLeft.days}
        <small className="text-xs lg:text-xl text-white">
          Days
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black/50 text-white text-2xl lg:text-5xl lg:w-28 w-15 lg:py-5 py-2 shadow-lg rounded-lg backdrop-blur-sm">
        {timeLeft.hours}
        <small className="text-xs lg:text-xl text-white">
          Hours
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black/50 text-white text-2xl lg:text-5xl lg:w-28 w-15 lg:py-5 py-2 shadow-lg rounded-lg backdrop-blur-sm">
        {timeLeft.minutes}
        <small className="text-xs lg:text-xl text-white">
          Minutes
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black/50 text-white text-2xl lg:text-5xl lg:w-28 w-15 lg:py-5 py-2 shadow-lg rounded-lg backdrop-blur-sm">
        {timeLeft.seconds}
        <small className="text-xs lg:text-xl text-white">
          Seconds
        </small>
      </span>
    </div>
  );
};

export default Timer;
