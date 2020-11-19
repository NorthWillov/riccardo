import "../styles/App.css";
import logo from "../images/logo.png";

function App() {
  return (
    <div className="App">
      <nav className="navbarr">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="logo" srcSet={logo} alt="riccardo-logo" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
