import React from "react";
import Navbar from "./Navbar";
import Connect from "./Connect";
import Contact from "./Contact/Contact";

function Layout(props) {
  return (
    <div>
      <div className="topContainer">
        <Navbar />
      </div>
      <Contact />
      <Connect handleOnClickCalendly={props.handleOnClickCalendly} />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
