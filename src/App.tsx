import Header from "./components/layout/Header";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex justify-center items-center">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
