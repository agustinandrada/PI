import { useEffect, useState } from "react";

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperament:[],
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

 const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
      
        setForm({ ...form, [property]: value });
      };
      
const weightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
      
    setWeightH({ ...weightH, [property]: value });
}
      
const heightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
      
    setHeightH({ ...heightH, [property]: value });

};
      
const handleSubmit = (event) => {
        event.preventDefault(); //! Asi no recarga la pag cuando tocamos enter
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
        <form>
            <h2>
                Create a new dog
            </h2>

            <div>
                <label></label>
                <input 
                type="text"
                placeholder="Name" 
                value={form.name} 
                onChange={changeHandler} 
                name="name">
                </input>         
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
                <> Years </>          
            </div>

            <>-----------</>
            
            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Temperaments" >
                </input>         
            </div>

            <>-----------</>

            <div>
                <label>Ingrese URL o suba su imagen</label>
                <input 
                type="text" 
                value={form.image}>
                </input>
                <> </>
                <input 
                type="file" 
                value={form.image}>
                </input>         
            </div>

            <div>
                <label></label>
                <input 
                type="submit" 
                onSubmit={handleSubmit}>
                </input>         
            </div>
        </form>
    )
}

export default Form;






