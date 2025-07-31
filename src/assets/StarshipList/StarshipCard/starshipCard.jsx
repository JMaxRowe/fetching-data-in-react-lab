
const StarshipCard = ({ship}) =>{
    return(
        <li>
            <h3>{ship.name}</h3>
            <p>Class: {ship.starship_class}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Model :{ship.model}</p>
        </li>
    )
}

export default StarshipCard