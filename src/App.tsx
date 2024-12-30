import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <AnimatedBackground />
      <div
        style={{
          position: "relative",
          zIndex: 100,
          color: "white",
          paddingTop: "72px",
        }}
      >
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
