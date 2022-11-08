import "./footer.css";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaHeart, FaInstagram, FaFacebookSquare, FaYoutube, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer () {
    return (
        <div className="footer">
            <div className="title-redes">
                <h6>Seguinos en Redes y Contactanos</h6>
                <div>
                   <h6>
                    <FaInstagram/> <FaFacebookSquare/> <FaYoutube/> <FaRegEnvelope/> <FaWhatsapp/>
                   </h6>
                </div>
            </div>
            
            
            <div className="copy-right">    
            <h6><FaHeart/> <AiFillCopyrightCircle/> PG Web Development -  2022 <FaHeart/></h6>
            </div>
            
        </div>
        
    );
}
 
export default Footer;