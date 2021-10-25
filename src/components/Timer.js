import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

const Timer = ({ workTime, restTime }) => {
  const [timeToWork, setTimeToWork] = useState(true);
  const [minutes, setMinutes] = useState(workTime.minutes);
  const [seconds, setSeconds] = useState(workTime.seconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setTimeToWork(timeToWork ? false : true);
          setMinutes(timeToWork ? workTime.minutes : restTime.minutes);
          setSeconds(timeToWork ? workTime.seconds : restTime.seconds);
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 100000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div>
      <Row xs={12} sm={12} md={12} lg={12} noGutters>
        {/* WORK TIME COLUMN */}
        <Col
          xs={12}
          sm={12}
          md={timeToWork ? 8 : 4}
          lg={timeToWork ? 8 : 4}
          className="work-time"
          style={{ padding: "0" }}
        >
          <ProgressBar
            animated
            variant="danger"
            now={
              timeToWork
                ? workTime.minutes * 60 +
                  workTime.seconds -
                  (minutes * 60 + seconds)
                : workTime.minutes * 60 + workTime.seconds
            }
            min={0}
            max={workTime.minutes * 60 + workTime.seconds}
            style={{ width: "100%", height: "10vh", borderRadius: "0px" }}
          />
          <div className="center-screen">
            <h2 className={!timeToWork && "dimmed-text"}>
              {timeToWork
                ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                : `${workTime.minutes}:${
                    workTime.seconds < 10
                      ? `0${workTime.seconds}`
                      : workTime.seconds
                  }`}
            </h2>
            {timeToWork && <h3>It's time to work!</h3>}
          </div>
        </Col>

        {/* REST TIME COLUMN */}
        <Col
          xs={12}
          sm={12}
          md={timeToWork ? 4 : 8}
          lg={timeToWork ? 4 : 8}
          className="rest-time"
          style={{ padding: "0" }}
        >
          <ProgressBar
            animated
            variant="success"
            now={
              !timeToWork
                ? restTime.minutes * 60 +
                  restTime.seconds -
                  (minutes * 60 + seconds)
                : 0
            }
            min={0}
            max={restTime.minutes * 60 + restTime.seconds}
            style={{ width: "100%", height: "10vh", borderRadius: "0px" }}
          />
          <div className="center-screen">
            <h2 className={timeToWork && "dimmed-text"}>
              {!timeToWork
                ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                : `${restTime.minutes}:${
                    restTime.seconds < 10
                      ? `0${restTime.seconds}`
                      : restTime.seconds
                  }`}
            </h2>
            {!timeToWork && <h3>It's time to have rest!</h3>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Timer;
