import menu from "../data";

const Menu = ({id, title, category, price, img, desc}) => {
    return ( <section>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>${price.toFixed(2)}</h4>
        <h3>{category}</h3>
        <p>{desc}</p>
    </section> );
}
 
export default Menu;

console.log(Menu.jsx)