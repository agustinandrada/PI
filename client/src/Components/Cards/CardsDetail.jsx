import { useSelector } from 'react-redux';
import style from "./Cards.module.css"
import CardDetail from '../Card/CardDetail';

const CardsDetail = () => {

  const dogs = useSelector(state=>state.dogs)

   return (
    <div className={style.cards}>
      {dogs.map(({image, name, temperament, weight, life_span, id})=>{
        return (
        <CardDetail
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


export default CardsDetail;