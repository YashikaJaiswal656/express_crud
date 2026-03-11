import { Link } from 'react-router-dom';
import '../css/header.css';

function Header(){
    return(

        <>
         <div className="container_head">
            <div className="header">
                <div className="icon_head">Ecommerce</div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/Cat"}>Categorie</Link>
                    </li>
                    <li>
                        <Link to={"/View"}>View</Link>
                    </li>
                </ul>

            </div>
         </div>
        </>
    )
}
export default Header;