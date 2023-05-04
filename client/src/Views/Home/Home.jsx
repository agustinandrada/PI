import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch } from "react-redux";
import { getDogs, getFiltApi, getFiltBdd, getName, getNext } from "../../Redux/actions";

const Home = ()=>{

  const dispatch = useDispatch();

  const [name, setName] = useState("")

  const[filtro, setFiltro] = useState("")

  const[orden, setOrden] = useState("")

  // const[pagina, setPagina]= useState("")

  // const[disabled, setDisabled]= useState("")

  const handleChange =(event) =>{
    setName(event.target.value)
  }
  
  const handleFilter =(event) =>{
    setFiltro(event.target.value)
  }

  const handleOrder =(event) =>{
    setOrden(event.target.value)
  }

  // const handlePag=(event)=>{
  //    const valor = event.target.value
  //    if(valor === "next"){
  //     contador = contador + 1
  //     dispatch(getNext())
  //     }if(valor === "prev" && contador > 0){
  //       contador = contador - 1
  //     }
  // }


  const onFilter = () => {
    if(filtro === "reset"){
      dispatch(getDogs(orden))
    }if(filtro === "bdd"){
      dispatch(getFiltBdd(orden))
    }if(filtro === "api"){
      dispatch(getFiltApi(orden))
    }
  };


  const onSearch =()=>{
    dispatch(getName(name))
  }

  const handleKeyPress =(event)=>{
    if (event.key === "Enter") {
      onSearch();
    }
  }
  
    
  useEffect(()=>{
      dispatch(getDogs(orden))
    },[dispatch, orden])

    return(
        <>
            <div>
              <input type='search' value={name} onChange={handleChange} onKeyPress={handleKeyPress} />
            </div>

            <div>
              <select  onChange={handleFilter}>
                <option value="reset">Reset filter</option>
                <option value="api">Api</option>
                <option value="bdd">Base de Datos</option>
              </select>
              <p onClick={onFilter()}/>
            </div>

            <div>
              <select  onChange={handleOrder}>
                <option value="normal">A-Z</option>
                <option value="inverso">Z-A</option>
                <option value="pesado">Pesado - Liviano</option>
                <option value="liviano">Liviano - Pesado</option>
              </select>
            </div>

            <Cards/>

            <button id="prev-button" value="next" >Anterior</button>
            <button id="next-button" value="prev" >Siguiente</button>
        </>
    )
}

export default Home;