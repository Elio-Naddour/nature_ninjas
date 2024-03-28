// import "./styles.css";
import { Joystick } from "react-joystick-component";
import { useEffect, useMemo, useRef, useState } from "react";

function GobeJoystickController({
  move,
  start,
  stop,
  opactiy = 1.0,
  className,
}) {
  const [containerDiv, setContainerDiv] = useState();
  // the container will always fill it's parent
  const containerStyle = useRef({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  }).current;
  const baseColor = useMemo(
    () =>
      `radial-gradient(circle at 50% 50%, rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}),  rgba(5,5,5,${opactiy}))`,
    [opactiy]
  );
  const stickColor = useMemo(
    () =>
      `radial-gradient(circle at 50% 50%, rgba(70,70,70,${opactiy}), rgba(70,70,70,${opactiy}), rgba(5,5,5,${opactiy}))`,
    [opactiy]
  );
  return (
    <div ref={setContainerDiv} style={containerStyle} className={className}>
      {containerDiv ? (
        <Joystick
          // we are assuming that the container dimensions will never change in the lifetime of this component
          size={Math.min(containerDiv.offsetWidth, containerDiv.offsetHeight)}
          baseColor={baseColor}
          stickColor={stickColor}
          throttle={200}
          move={move}
          stop={stop}
          start={start}
        />
      ) : null}
    </div>
  );
}

export default function Controller({ setX, setY }) {
  const [movement, setMovement] = useState("STOP");
  let myInterval;
  useEffect(() => {
    switch (movement) {
      case "BACKWARD":
        clearInterval(myInterval);
        myInterval = setInterval(function () {
          setY((prev) => prev + 30);
        }, 100);
        break;
      case "RIGHT":
        clearInterval(myInterval);
        myInterval = setInterval(function () {
          setX((prev) => prev + 30);
        }, 100);
        break;
      case "LEFT":
        clearInterval(myInterval);
        myInterval = setInterval(function () {
          setX((prev) => prev - 30);
        }, 100);
        break;
      case "FORWARD":
        clearInterval(myInterval);
        myInterval = setInterval(function () {
          setY((prev) => prev - 30);
        }, 100);
        break;
      case "STOP":
        clearInterval(myInterval);
        break;
    }
  }, [movement, myInterval]);

  const handleMove = (e) => {
    console.log(e);
    setMovement(e.direction);
  };
  const handleStop = (e) => {
    console.log(e);
    setMovement("STOP");
    clearInterval(myInterval);
  };
  const handleStart = (e) => {
    console.log(e);
  };

  // circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%
  return (
    <div className="App">
      <div className="controller-container">
        <GobeJoystickController
          opactiy={1}
          move={handleMove}
          stop={handleStop}
          start={handleStart}
        />
      </div>
    </div>
  );
}
