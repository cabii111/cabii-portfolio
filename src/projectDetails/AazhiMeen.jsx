import React from "react";

function AazhiMeen() {

  return (

    <div className="case-study-page">

      {/* HERO */}

      <div className="case-hero">

        <h1>Aazhi Meen</h1>

        <p>
          Fresh fish preorder mobile application
          designed for smooth seafood ordering
          and scheduled delivery experience.
        </p>

      </div>

      {/* OVERVIEW */}

      <div className="case-section">

        <h2>Project Overview</h2>

        <p>
          Aazhi Meen is a seafood preorder platform
          focused on helping users order fresh fish
          online while avoiding crowded fish markets.
        </p>

      </div>

      {/* USER PERSONA */}

      <div className="case-section">

        <h2>User Persona</h2>

        <img
          src="/persona2.jpg"
          alt=""
          className="case-image"
        />

      </div>

      {/* EMPATHY MAP */}

      <div className="case-section">

        <h2>Empathy Map</h2>

        <img
          src="/empathy2.jpg"
          alt=""
          className="case-image"
        />

      </div>

      {/* USER JOURNEY */}

      <div className="case-section">

        <h2>User Journey</h2>

        <img
          src="/journey2.jpg"
          alt=""
          className="case-image"
        />

      </div>

      {/* FLOWCHART */}

      <div className="case-section">

        <h2>User Flowchart</h2>

        <img
          src="/flowchart2.jpg"
          alt=""
          className="case-image"
        />

      </div>

      {/* UI SCREENS */}

      <div className="case-section">

        <h2>UI Screens</h2>

        <div className="screens-grid">

          <img src="/fish1.jpg" alt="" />
          <img src="/fish2.jpg" alt="" />
          <img src="/fish3.jpg" alt="" />
          <img src="/fish4.jpg" alt="" />

        </div>

      </div>

    </div>

  );
}

export default AazhiMeen;