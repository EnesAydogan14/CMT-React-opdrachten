import menu from '../data'
import {useState} from "react";
import Menu from './Menu';

const Menulist = () => {
      const [gerechten, setGerechten ] = useState(menu)
    
    return ( <section>
     
{gerechten.map((gerecht) =>(
        <Menu
        key={gerecht.id}
        title={gerecht.title}
        category={gerecht.category}
        price={gerecht.price}
        img={gerecht.img}
        desc={gerecht.img}
         />
    ))}

    </section> );
}
 
export default Menulist;