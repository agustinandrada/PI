import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = () => {

  const dogs = useSelector(state=>state.dogs)

   return (
    <div className={style.cards}>
      {dogs.map(({image, name, temperament, weight })=>{
        return (
        <Card
        image={image}
        Nombre={name}
        Temperamento={temperament}
        Peso={weight}
        />)
      })}        
    </div>
)}


export default Cards;