import "./footer.css";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Footer () {
    return (
        <div className="footer">
            <div className="title-redes">
                <h6>Seguinos en Redes Sociales</h6>
                <h6> redes </h6>
            </div>
            
            
            <div className="copy-right">    
            <h6><FaHeart/> <AiFillCopyrightCircle/> PG Web Development -  2022 <FaHeart/></h6>
            </div>
            
        </div>
        
    );
}
 
export default Footer;