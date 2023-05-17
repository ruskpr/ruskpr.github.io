import React from "react";
import logo from "./logo.svg";
import { Button, ButtonType, ButtonSize } from "./components/ui/Button";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="flex justify-center items-center h-screen">
        <Button type={ButtonType.Light}>Light</Button>
        <Button>Hello</Button>
      </div>
    </div>
  );
}

export default App;
