import style from "./card.module.css"
import { Link } from "react-router-dom"

const Card = ({name, image, temperament, weight, life_span, id }) => {
    return(
    <Link to={`/detail/${id}`}>
        <div className={style.card}>
            <p>{name}</p>
            <p>
                <img className={style.image} src={image.url} alt={name} />
            </p>
            <p>Temperamento: {temperament}</p>
            <p>Peso: {weight.metric} kg</p>
        </div> 
    </Link>
    ) 
}

export default Card