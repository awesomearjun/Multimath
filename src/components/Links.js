import Cards from "./Cards"
import { Link } from 'react-router-dom';

function Links() {
    return (
        <>
            <Link to="/addition">
                <Cards title="Addition" className="addition" type_="addition" description="Learn how to add easily! One of the most important stepping stools in math, a very important basic skill to master before you do any of the more advanced stuff." />
            </Link>

            <Link to="/subtraction">
                <Cards title="Subtraction" className="subtraction" type_="subtraction" description="Subtract values, the opposite of addition but related in some way. Going backwards instead of forwards." />
            </Link>

            <Link to="/multiplication">
                <Cards title="Multiplication" className="multiplication" type_="multiplication" description="Just repeated addition, willl help you in area and stuff like that." />
            </Link>

            <Link to="/division">
                <Cards title="Division" className="division" type_="division" description="Repeated subtraction. very easy to do. After this, you will know all the simple math operations!" />
            </Link>
        </>
    )
}

function MobileLinks() {
    return (
        <>
            <Link to="/addition">
                <h1>Addition</h1>
            </Link>

            <Link to="/subtraction">
                <h1>Subtraction</h1>
            </Link>

            <Link to="/multiplication">
                <h1>Multiplication</h1>
            </Link>

            <Link to="/division">
                <h1>Division</h1>
            </Link>
        </>
    )
}

export default Links;
export { MobileLinks };