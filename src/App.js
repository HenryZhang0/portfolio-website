import "./App.css";
import Card from "./components/Card.js";
import AboutMe from "./components/AboutMe.js";

function App() {
  return (
    <div className="App">
      <div className="cardHolder">
        <Card title="About Me"></Card>
        <Card title="Projects"></Card>
        <Card title="Experience"></Card>
      </div>
      <div className="content">
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
