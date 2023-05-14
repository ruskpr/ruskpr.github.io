import React from "react";
import logo from "./logo.svg";
import { Button, ButtonType } from "./components/ui/Button";
import Header from "./components/home-page/Header";

function App() {
  return (
    <div className="bg-gray-800 h-screen justify-content-center">
      {/* <Header /> */}
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <Button type={ButtonType.PRIMARY}>Primary</Button>
        <Button type={ButtonType.SECONDARY}>Secondary</Button>
        <Button type={ButtonType.SUCCESS}>Success</Button>
        <Button type={ButtonType.WARNING}>Warning</Button>
        <Button type={ButtonType.DANGER}>Danger</Button>
        <Button type={ButtonType.LIGHT}>Light</Button>
        <Button type={ButtonType.DARK}>Dark</Button>
      </div>
    </div>
  );
}

export default App;
