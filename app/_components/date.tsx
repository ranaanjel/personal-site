"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function DateComp() {
  let [hour, setHour] = useState("0");
  let [mins, setMins] = useState("0");
  let [onClass, setOnClass] = useState("");
  let [imgSrc, setImgSrc] = useState<string>("");

  let hourHandle = useCallback(function () {
    var date = new Date();
    date.setMinutes(date.getMinutes() + 330);
    let hour = date.getUTCHours().toString().padStart(2, "0");
    let mins = date.getUTCMinutes().toString().padStart(2, "0");
   
    setHour(String(hour));
    setMins(String(mins));

    let expression =
      Number(hour) >= 8 && Number(hour) <= 21
        ? "bg-green-600 rounded-full h-3 w-3"
        : "bg-gray-600 rounded-full h-3 w-3";
    let source = Number(hour) >= 8 && Number(hour) <= 21 ? "/active.png" : "/sleep.png";
    setOnClass(expression);
    setImgSrc(source);
  }, []);

  useEffect(function () {
    hourHandle();

    setInterval(function () {
      hourHandle();
    }, 60000);
  }, []);

  return (
    <div className="text-sm flex gap-2 items-center ">
      <div>
        {" "}
        ( {hour}:{mins} )
      </div>
      <div className={onClass + " animate-pulse"}> </div>
      <div>
        {imgSrc == "" ? null : (
          <Image
            src={imgSrc}
            alt=""
            height={28}
            width={28}
            className=""
          ></Image>
        )}
      </div>
    </div>
  );
}
