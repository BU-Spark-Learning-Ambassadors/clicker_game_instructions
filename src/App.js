import React, { useEffect, useState, useRef } from 'react';
import { Typography, Button, Spin } from 'antd';

const { Text, Title } = Typography;

function App() {
  // State: Use to store and manage variables in functional components
  const [timer, setTimer] = useState(0); // Manage the timer
  const [isActive, setIsActive] = useState(false); // Manage the state of the timer (active/inactive)
  const [clicks, setClicks] = useState(0); // Manage click count
  const [clicksPerSecond, setClicksPerSecond] = useState(0); // Manage click per second ratio
  const [backgroundColor, setBackgroundColor] = useState('white'); // Manage the background color of the clickable area
  
  const clickArea = useRef(null); // Ref: Point to the DOM element to manipulate it directly
  const timerRef = useRef(null);  // Ref: Used to refer the timer and use it in other parts of the component
  
  const unselectableStyle = {
    userSelect: 'none',
  };
  
  // Function to start the timer and reset relevant states
  const startTimer = () => {
    // TODO: When starting the timer, what states need to be reset or changed?
    // TODO: How should the timer behave once started? What happens when it hits a certain condition?
  };

  // Function to stop the timer
  const stopTimer = () => {
    // TODO: What needs to be cleaned up or reset when the timer is stopped?
    // TODO: What states need to be changed when the timer stops?
  };

  // Function to increment the click counter and change background color temporarily
  const incrementCounter = () => {
    // TODO: On clicking, what should happen to the clicks state?
    // TODO: How should the background color change upon clicking?
    // TODO: How should clicks per second be calculated?
  };

  // Effect to clear interval when component is unmounted to prevent memory leaks
  useEffect(() => {
    // TODO: Understand and describe the purpose of this cleanup effect
    // TODO: When is it necessary to clean up side-effects and why?
  }, []);

  // UI rendering
  return (
    <div className="App">
      {/* TODO: Style and layout your components appropriately */}
      {/* TODO: How do states and actions bind with the UI? */}
      {/* TODO: What UI components need to react to different state changes? */}
      <div style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridGap: "1rem",
        width: "50%",
        margin: "auto",
        marginTop: "1rem",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Title level={2} style={{ color: "black", gridArea: "1/1/1/3" }}>Clicker Game</Title>
          {isActive ? <Spin style={{ gridArea: "1/1/3/3", marginLeft: "30%", marginTop: "1%" }} /> : null}
        </div>
        <Button type="primary" style={{ width: "10rem", left: "40%" }} onClick={startTimer} disabled={isActive}>Start Timer</Button>
        {isActive && (
          <>
            <Button type="primary" style={{ width: "10rem", left: "40%" }} onClick={stopTimer}>Stop Timer</Button>
            <h2>Time Elapsed: {timer} sec</h2>
            <Text level={4} style={unselectableStyle} keyboard>{clicks} clicks | Clicks Per Second: {clicksPerSecond.toFixed(3)}</Text>
            <div
              ref={clickArea}
              onClick={incrementCounter}
              style={{
                backgroundColor: backgroundColor,
                color: "white",
                height: "30rem",
                boxShadow: ".5px 2px 2px 2.5px #539592",
                display: "flex",
                margin: "auto",
                borderRadius: ".5rem",
                width: "50rem",
                marginTop: "1rem",
                cursor: "pointer"
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
