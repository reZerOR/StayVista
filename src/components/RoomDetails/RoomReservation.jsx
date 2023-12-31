/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  // price calculation
  //  total days * price
  if (room.to) {
    var totalDays = parseInt(
      formatDistance(new Date(room.to), new Date(room.from)).split(" ")[0]
    );

    var totalPrice = totalDays * room?.price;
  }
  // const [value, setValue] = useState({
  //   startDate: new Date(room?.from),
  //   endDate: new Date(room?.to),
  //   key: "selection",
  // });
  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
