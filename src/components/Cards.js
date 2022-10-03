import "../styles/Cards.css"

function Cards({ title, type_ }) {
    return (
        <div className={type_}>
            <h1>{title}</h1>
        </div>
    )
}

export default Cards;