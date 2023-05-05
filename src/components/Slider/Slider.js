import React, { useState } from 'react';
import './Slider.css'


const Slider = () => {
  const [activePanel, setActivePanel] = useState(0);

  const handlePanelClick = (index) => {
    setActivePanel(index);
  }

  const panels = [
    {
      backgroundImage: "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      text: "Explore The World"
    },
    {
      backgroundImage: "url('https://images.pexels.com/photos/12040331/pexels-photo-12040331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      text: "Wild Forest"
    },
    {
      backgroundImage: "url('https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      text: "Sunny Beach"
    },
    {
      backgroundImage: "url('https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg')",
      text: "City on Winter"
    },
    {
      backgroundImage: "url('https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      text: "Mountains-Clouds"
    }
  ];

  return (
    <div className="main">
      <div className="container">
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`panel ${index === activePanel ? "active" : ""}`}
            style={{ backgroundImage: panel.backgroundImage }}
            onClick={() => handlePanelClick(index)}
          >
            <h3>{panel.text}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider;
