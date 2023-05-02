import { Link } from "react-router-dom";

const Landing = ()=>{
    return(
        <>
        <h1>Esta es la vista del Landing</h1>
        <Link to='/home/1'>
        <button>Home</button>
        </Link>
        </>
    )
}

export default Landing;