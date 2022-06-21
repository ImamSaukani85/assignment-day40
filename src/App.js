import React from "react";
import "./App.css";
import GetSection from "./components/GetSection/view";
import PostSection from "./components/PostSection/view";


function App() {
  return (
    <div id="app" className="container my-3">
      <h3 data-testid="testing">React Axios example - netlify 11/06/2022</h3>
      <GetSection />
      <PostSection />
    </div>
  );
}

export default App;
