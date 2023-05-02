import style from "./card.module.css"


const CardDetail = ({name, image, temperament, weight, life_span, id }) => {
    return(
        <div className={style.Card}>
            <h2>{name}</h2>
            <p><img className={style.image} src={image.url} alt={name} /></p>
            <p>Temperamento:{temperament}</p>
            <p>Peso:{weight.metric} kg</p>
            <p>Años de vida:{life_span}</p>
            <p>Id:{id}</p>
        </div>
    ) 
}

export default CardDetail