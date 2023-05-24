import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRouter from "./components/layout/AppRouter";

function App() {
  return (
    <div className="bg-gray-950">
      <Header />
      <div className="container mx-auto flex justify-center items-center">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
