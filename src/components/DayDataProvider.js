import React, { useEffect, useState } from "react";

export default function DayDataProvider({ render }) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(getDays);
  }, []);

  const getDays = () => {
    let storedDays = window.localStorage.getItem("planned-days");
    if (storedDays) {
      storedDays = JSON.parse(storedDays);
    }

    return storedDays;
  };

  const addDay = (day) => {
    let storedDays = window.localStorage.getItem("planned-days");
    storedDays = JSON.parse(storedDays);
    if (storedDays && storedDays.push) {
      storedDays.push(day);
    } else {
      storedDays = [day];
    }
    window.localStorage.setItem("planned-days", JSON.stringify(storedDays));
  };

  let data = {
    dayHelpers: {
      plannedDays: days,
      getDays: getDays,
      addDay: addDay,
    },
  };

  return <div>{render(data)}</div>;
}
