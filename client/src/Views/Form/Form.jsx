import { useEffect, useState } from "react";
import style from "./Form.module.css"
import validation from "../validation";
import axios from "axios"

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperaments:"",
        image:""
    })

    const [weightH, setWeightH] = useState({
        min:"",
        max:""
    })

    const [heightH, setHeightH] = useState({
        min:"",
        max:""
    })

    const [errors, setErrors] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperaments:"",
        image:""
    })





 const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
      
        validation({...form,[property]:value}, setErrors, errors)
        setForm({ ...form, [property]: value });
};
      
const weightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    validation({...form,[property]:value}, setErrors, errors)
    setWeightH({ ...weightH, [property]: value })
}

     
const heightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    validation({...form,[property]:value}, setErrors, errors)
    setHeightH({ ...heightH, [property]: value });
};

const tempHHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    const sep = value.split(',');
    const final = sep.map(num => parseInt(num))

    validation({...form,[property]:final}, setErrors, errors)
    setForm({...form, [property]: final});
}

const handleSubmit = (event) => {
        event.preventDefault(); //! Asi no recarga la pag cuando tocamos enter
        axios.post("http://localhost:3001/dogs", form)
        .then(alert("Whof Whof"))
        .catch(err=>alert(err));
};





useEffect(() => {
    const finalWeight = [weightH.min, "-", weightH.max].join(" ");
    setForm((prevForm) => ({ ...prevForm, weight: finalWeight }));
  }, [weightH]);

useEffect(() => {
    const finalHeight = [heightH.min, "-", heightH.max].join(" ");
    setForm((prevForm) => ({ ...prevForm, height: finalHeight }));
  }, [heightH]);
   



    return(
        <>
        <p className={style.ref1}></p>
        <p className={style.ref2}></p>
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
                <label></label>
                <input 
                type="text"
                placeholder="Name" 
                value={form.name} 
                onChange={changeHandler} 
                name="name">
                </input> 
                <span className={style.error}>{errors.name}</span>        
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Weight Min" 
                onChange={weightHandler}
                name="min"
                value={weightH.name}>
                </input> 
                <> Kg </>
                <span className={style.error}>{errors.weight}</span>        
            </div>

            <div>
                <input 
                type="text" 
                placeholder="Weight Max"
                onChange={weightHandler}
                name="max"
                value={weightH.name}>
                </input>  
                <> Kg </> 
                <span className={style.error}>{errors.weight}</span>   
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Height Min"
                name="min" 
                onChange={heightHandler}
                value={heightH.value}>
                </input> 
                <> Cm </> 
                <span className={style.error}>{errors.height}</span>
            </div>
            
            <div>
                <input 
                type="text" 
                placeholder="Height Max"
                name="max" 
                onChange={heightHandler}
                value={heightH.value}>
                </input>   
                <> Cm </> 
                <span className={style.error}>{errors.height}</span>        
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Life expectancy" 
                value={form.life_span} 
                onChange={changeHandler} 
                name="life_span">
                </input>
                <span className={style.error}>{errors.life_span}</span>  
                <> Years </> 
            </div>

            <>-----------</>
            
            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Temperaments" 
                name="temperaments"
                onChange={tempHHandler}
                >
                </input>
                <span className={style.error}>{errors.temperaments}</span> 
                <p className={style.small}>Ingresar el id del temperamento, separado por coma</p>         
            </div>

            <>-----------</>

            <div>
                <label>Ingrese URL</label>
                <input 
                type="text" 
                value={form.image}
                onChange={changeHandler}
                name="image">
                </input> 
                <span className={style.error}> {errors.image}</span>        
            </div>

            <button type="submit" className={style.button}></button>
        </form>
        </>
    )
}

export default Form;






