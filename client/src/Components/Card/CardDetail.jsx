import style from "./card.module.css"


const CardDetail = ({name, image, temperaments, temperament, weight, life_span, id }) => {
   if( typeof id === "number"){
        return(
                <div className={style.card}>
                    <h2>{name}</h2>
                    <p><img className={style.image} src={image.url} alt={name} /></p>
                    <p>Temperamento: {temperament}</p>
                    <p>Rango de Peso: {weight.metric} kg</p>
                    <p>Espectativa de vida: {life_span}</p>
                    <p>{id}</p>
                </div>
            ) 
   }else{
    const tempe = temperaments.map((temp)=> temp.name)
        const final = tempe.join(", ")
        return(
                <div className={style.card}>
                    <p>{name}</p>
                    <p>
                        <img className={style.image} src={image} alt={name} />
                    </p>
                    <p>Temperamento: {final}</p>
                    <p>Rango de Peso:: {weight} kg</p>
                    <p>Espectativa de vida: {life_span}</p>
                    <p>{id}</p>
                </div> 
            )
    }   
}

export default CardDetail