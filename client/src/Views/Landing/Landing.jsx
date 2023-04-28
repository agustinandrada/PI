import { Link } from "react-router-dom";

const Landing = ()=>{
    return(
        <>
        <h1>Esta es la vista del Landing</h1>
        <Link to='/home'>
        <button>Home</button>
        </Link>
        </>
    )
}

export default Landing;