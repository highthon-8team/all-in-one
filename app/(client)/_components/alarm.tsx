import { useEffect, useState } from "react";


const AlarmClock = () => {
  const [clockTime, setClockTime] = useState("00:00:00");
  const [alarmTime, setAlarmTime] = useState("0");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status && clockTime === alarmTime) {
      console.log("get up", clockTime, alarmTime);
      setStatus(false);
    }
  }, [clockTime, alarmTime, status]);

  const updateClockTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours.toString().length === 1) hours = parseInt("0" + hours);
    if (minutes.toString().length === 1) minutes = parseInt("0" + minutes);
    if (seconds.toString().length === 1) seconds = parseInt("0" + seconds);

    let clockFormat = `${hours}:${minutes}:${seconds}`;
    //console.log("Clock: ", clockFormat);
    setClockTime(clockFormat);
  };

  const handleAlarmTimeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log("alarm time: ", e.target.value);
    setAlarmTime(e.target.value);
  };

  const handleToggle = () => {
    setStatus(!status);
  };

  const handleReset = () => {
    setAlarmTime("0");
    setStatus(false);
  };

  useEffect(() => {
    setInterval(updateClockTime, 1000);
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h1>Alarm Clock</h1>

        <div className="containt">
          <h2>{clockTime}</h2>
          <input
            type="time"
            step="1"
            value={alarmTime}
            onChange={handleAlarmTimeChange}
          />
        </div>
        <button onClick={handleToggle}>
          {status ? "Stop Alarm" : "Start Alarm"}
        </button>
        <button onClick={handleReset}>Reset Alarm</button>
      </div>
    </div>
    );
};

export default AlarmClock;