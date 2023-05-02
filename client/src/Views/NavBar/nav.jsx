import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <>
            <Link to='/home/1'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/'>
                <button>Landing</button>
            </Link>
            <Link to='/form'>
                <button>Create New Dog</button>
            </Link>
        </>
    )
}

export default Nav;