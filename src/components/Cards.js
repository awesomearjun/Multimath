import "../styles/Cards.css"

function Cards({ title, type_, description }) {
    return (
        <div className={type_}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Cards;