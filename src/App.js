import Cards from "./components/Cards"
import "./styles/App.css"

function App() {
  return (
    <div>
      <div className="cards">
        <Cards title="Addition" className="addition" />
        <Cards title="Subtraction" className="subtraction" />
        <Cards title="Multiplication" className="multiplication" />
        <Cards title="Division" className="division" />
      </div>
    </div>
  )
}

export default App;
