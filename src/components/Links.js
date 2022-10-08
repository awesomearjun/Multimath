import Cards from "./Cards"
import { Link } from 'react-router-dom';

function Links() {
    return (
        <>
            <Link to="/addition">
                <Cards title="Addition" className="addition" type_="addition" />
            </Link>

            <Link to="/subtraction">
                <Cards title="Subtraction" className="subtraction" type_="subtraction" />
            </Link>

            <Link to="/multiplication">
                <Cards title="Multiplication" className="multiplication" type_="multiplication" />
            </Link>

            <Link to="/division">
                <Cards title="Division" className="division" type_="division" />
            </Link>
        </>
    )
}

export default Links