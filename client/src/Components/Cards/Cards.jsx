import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = () => {

  const dogs = useSelector(state=>state.dogs)

   return (
    <div className={style.cards}>
      {dogs.map(({image, name, temperament, weight, life_span, id})=>{
        return (
        <Card
        image={image}
        name={name}
        temperament={temperament}
        weight={weight}
        life_span={life_span}
        id={id}
        />)
      })}        
    </div>
)}


export default Cards;