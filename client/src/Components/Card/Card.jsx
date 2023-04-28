import style from "./card.module.css"

const Card = ({name, image, temperament, weight }) => {
    return(
        <div className={style.card}>
            <p>Nombre:{name}</p>
            <p>Image:<img src={image.url} alt={name} /></p>
            <p>Temperamento:{temperament}</p>
            <p>Peso:{weight} kg</p>
        </div>
    ) 
}

export default Card