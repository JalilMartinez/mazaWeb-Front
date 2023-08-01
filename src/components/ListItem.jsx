import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import '../styles/ListItem.css'
export const ListItem = ({title,text}) => {
    return ( 
        <>
            <div className="ListItem">
                <h4>
                    <FontAwesomeIcon icon={faTerminal} /> <b>{title} : </b> &nbsp; {text}
                </h4>
            </div>
        </>
     );
}