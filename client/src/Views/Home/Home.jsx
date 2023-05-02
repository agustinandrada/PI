import { useEffect } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch } from "react-redux";
import { getDogs } from "../../Redux/actions";

const Home = ()=>{

  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getDogs())
    },[dispatch])

    return(
        <>
          <h1>Esta es la Vista del Home</h1>
          <Cards/>
          <button id="prev-button">Anterior</button>
          <button id="next-button">Siguiente</button>
        </>
    )
}

export default Home;