import React from "react";

const Hours = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    let openingTime, closingTime;

    if (currentDay >= 1 && currentDay <= 5) {
        openingTime = "10:00 AM";
        closingTime = "4:00 PM";
    } else if (currentDay === 0 || currentDay === 6) {
        openingTime = "9:00 AM";
        closingTime = "8:00 PM";
    }

    return (
        <div>
            <h2>Today's Hours</h2>
            <p>Day: {getDayName(currentDay)}</p>
            <p>Opening Time: {openingTime}</p>
            <p>Closing Time: {closingTime}</p>
        </div>
    );
};

const getDayName = (dayIndex) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
};

export default Hours;
