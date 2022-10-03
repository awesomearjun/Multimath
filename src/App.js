import Cards from "./components/Cards"
import "./styles/App.css"

function App() {
  return (
    <div>
      <h1>Chose your operation:</h1>
      <div className="cards">
        <Cards title="Addition" className="addition" type_="addition" />
        <Cards title="Subtraction" className="subtraction" type_="subtraction" />
        <Cards title="Multiplication" className="multiplication" type_="multiplication" />
        <Cards title="Division" className="division" type_="division" />
      </div>
    </div>
  )
}

export default App;
