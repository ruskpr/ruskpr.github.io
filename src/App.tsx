import React from "react";
import logo from "./logo.svg";
import Button from "./components/ui/Button";
import Header from "./components/home-page/Header";

function App() {
  return (
    <div className="App bg-gray-800 h-screen justify-content-center">
      <Header />
      <Button onClick={() => window.alert("clicked")} className="border ">Click me</Button>
    </div>
  );
}

export default App;
