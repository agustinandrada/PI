import style from "./card.module.css"
import { Link } from "react-router-dom"

const Card = ({name, image, temperaments, weight, id }) => {
    if(typeof id === "number" ){
    return(
    <Link to={`/detail/${id}`}>
        <div className={style.card}>
            <p>{name}</p>
            <p>
                <img className={style.image} src={image.url} alt={name} />
            </p>
            <p>Temperamento: {temperaments}</p>
            <p>Peso: {weight.metric} kg</p>
        </div> 
    </Link>
    ) }else{
        const tempe = temperaments.map((temp)=> temp.name)
        const final = tempe.join(", ")
        return(
            <Link to={`/detail/${id}`}>
                <div className={style.card}>
                    <p>{name}</p>
                    <p>
                        <img className={style.image} src={image} alt={name} />
                    </p>
                    <p>Temperamento: {final}</p>
                    <p>Peso: {weight} kg</p>
                </div> 
            </Link>
            )
    }
}

export default Card