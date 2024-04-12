import "./App.css";
import Header from "./components/Header/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import TopPart from "./components/TopPart/TopPart";

function App() {
  return (
    <>
      <Header />
      <main>
        <TopPart/>
        <HowItWork/>
      </main>
    </>
  );
}

export default App;
