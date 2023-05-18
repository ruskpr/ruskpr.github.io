import { Button, ButtonType, ButtonSize } from "./components/ui/Button";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <Button type={ButtonType.Light}>Light</Button>
        <Button>Hello</Button>
      </div>
    </div>
  );
}

export default App;
