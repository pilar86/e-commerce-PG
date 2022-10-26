import {useState, useEffect} from 'react';
import "./itemListContainer.css";
import ItemList from "../../components/Productos/ItemList";
import { useParams } from "react-router-dom";
import {getItems, getItemsByCategory } from "../../services/firestore";
import { DotPulse } from '@uiball/loaders'


function ItemListContainer() {

    const [data, setData] = useState([]);     
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams ();
        
    
    useEffect(()=>{
        if (category === undefined) {
        getItems()
        .then((respDatos)=> setData(respDatos))
        .finally(() => setIsLoading(false));
        } else{
            getItemsByCategory(category)
            .then((respDatosFiltredos) => setData(respDatosFiltredos))
        }

        }, [category]);

        return (
            <div>
                {isLoading && <DotPulse size={80} speed={1.5} color="green"/>}
                <div className="main container">
                    <ItemList data={data}/>  
                    </div>
                </div>
        );
    }

export default ItemListContainer;

    
    
    