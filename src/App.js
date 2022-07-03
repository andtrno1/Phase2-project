//import Charts from "./Components/Charts";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Coin from "./Components/Coins";
import "./styles.css";

export default function App() {
  return (
    <body>
      <div className="App">
        <span>
          {" "}
          <Header />{" "}
        </span>
        <span>
          {" "}
          <NavBar />
        </span>
        <Coin />
      </div>
    </body>
  );
}
