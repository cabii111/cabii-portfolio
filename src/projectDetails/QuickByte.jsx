import React from "react";
import { Link } from "react-router-dom";

function QuickByte() {

  return (

    <div className="case-study-page">
        

      {/* HERO SECTION */}

      <div className="case-hero">

        <h1>QuickByte App</h1>

        <p>
          Premium food preorder mobile application
          designed for fast pickup experience,
          reduced waiting time and seamless ordering.
        </p>

      </div>

      {/* OVERVIEW */}

      <div className="case-section">

        <h2>Project Overview</h2>

        <p>
          QuickByte is a UI/UX case study focused on
          improving food ordering experience for
          students and busy users by enabling preorder
          and scheduled pickup functionality.
        </p>


      </div>

      {/* PROBLEM STATEMENT */}

<div className="case-section">

  <h2>Problem Statement</h2>

  <p>
    Students and busy users often waste time
    standing in long queues during peak hours.
    Existing food ordering systems lack fast
    preorder functionality and smooth pickup
    experience.
  </p>

</div>

      {/* USER PERSONA */}

      <div className="case-section">

        <h2>User Persona</h2>

        <img
          src="/persona.jpg"
          alt="User Persona"
          className="case-image"
        />

      </div>

      {/* EMPATHY MAP */}

      <div className="case-section">

        <h2>Empathy Map</h2>

        <img
          src="/empathy.jpg"
          alt="Empathy Map"
          className="case-image"
        />

      </div>

      {/* USER JOURNEY */}

      <div className="case-section">

        <h2>User Journey</h2>

        <img
          src="/journey.jpg"
          alt="User Journey"
          className="case-image"
        />

      </div>

      {/* FLOWCHART */}

      <div className="case-section">

        <h2>User Flowchart</h2>

        <img
          src="/flowchart.jpg"
          alt="Flowchart"
          className="case-image"
        />

      </div>

      {/* DESIGN SYSTEM */}

<section className="case-section">

  <h2>Design System</h2>

  <div className="design-system-grid">

    {/* COLORS */}

    <div className="design-card">

      <h3>Color System</h3>

      <div className="color-palette">

        <div className="color-item">

  <div className="color-box primary"></div>

  <div>
    <h4>Primary</h4>
    <p>#FF7A00</p>
  </div>

</div>

        <div className="color-item">

  <div className="color-box support"></div>

  <div>
    <h4>Support</h4>
    <p>#FF3B30</p>
  </div>

</div>

        <div className="color-item">

  <div className="color-box hover"></div>

  <div>
    <h4>Button Hover</h4>
    <p>#E66900</p>
  </div>

</div>

        <div className="color-item">

  <div className="color-box base"></div>

  <div>
    <h4>Base</h4>
    <p>#121212</p>
  </div>

</div>

        <div className="color-item">

  <div className="color-box surface"></div>

  <div>
    <h4>Surface</h4>
    <p>#1E1E1E</p>
  </div>

</div>

      </div>

    </div>

    {/* TYPOGRAPHY */}

    <div className="design-card">

      <h3>Typography System</h3>

      <p>Heading — Inter Bold — 24px</p>

      <p>Subheading — Inter Medium — 18px</p>

      <p>Button Text — Inter ExtraBold — 18px</p>

      <p>Body Text — Inter Regular — 14px</p>

      <p>Small Text — Inter Regular — 12px</p>

    </div>

    {/* STYLE */}

    <div className="design-card">

      <h3>Design Principles</h3>

      <p>Minimal Dark Theme</p>

      <p>Fast Pre-order Experience</p>

      <p>Modern Rounded Components</p>

      <p>Premium Mobile First UI</p>

      <p>Clean Visual Hierarchy</p>

    </div>

  </div>

</section>

      {/* UI SCREENS */}

      <div className="case-section">

        <h2>UI Screens</h2>

        <div className="screens-grid">

  <img src="/qb1.jpg" alt="" />
  <img src="/qb2.jpg" alt="" />
  <img src="/qb3.jpg" alt="" />
  <img src="/qb4.jpg" alt="" />

  <img src="/qb5.jpg" alt="" />
  <img src="/qb6.jpg" alt="" />
  <img src="/qb7.jpg" alt="" />
  <img src="/qb8.jpg" alt="" />

  <img src="/qb9.jpg" alt="" />
  <img src="/qb10.jpg" alt="" />
  <img src="/qb11.jpg" alt="" />
  <img src="/qb12.jpg" alt="" />

  <img src="/qb13.jpg" alt="" />
  <img src="/qb14.jpg" alt="" />
  <img src="/qb15.jpg" alt="" />
  <img src="/qb16.jpg" alt="" />

  <img src="/qb17.jpg" alt="" />
  <img src="/qb18.jpg" alt="" />
  <img src="/qb19.jpg" alt="" />
  <img src="/qb20.jpg" alt="" />

  <img src="/qb21.jpg" alt="" />
  <img src="/qb22.jpg" alt="" />
  <img src="/qb23.jpg" alt="" />
  <img src="/qb24.jpg" alt="" />

  <img src="/qb25.jpg" alt="" />
  <img src="/qb26.jpg" alt="" />
  <img src="/qb27.jpg" alt="" />
  <img src="/qb28.jpg" alt="" />

  <img src="/qb29.jpg" alt="" />
  <img src="/qb30.jpg" alt="" />
  <img src="/qb31.jpg" alt="" />
  <img src="/qb32.jpg" alt="" />

</div>
      </div>

      <div className="case-section figma-section">

  <h2>Want To Explore Full Case Study?</h2>

  <p>
    View the complete QuickByte UI/UX process,
    wireframes, design system and full prototype
    in Figma.
  </p>

  <a
    href="https://www.figma.com/design/VyXFzTBCpC0F3Rg4mvYGtf/Final-Project?node-id=236-1033&t=4QSpLTLnf7dxhHlx-1"
    target="_blank"
    rel="noopener noreferrer"
    className="figma-btn"
  >
    Open Full Figma Project
  </a>

</div>

    </div>

  );
}

export default QuickByte;