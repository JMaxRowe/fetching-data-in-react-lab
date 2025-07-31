import StarshipCard from './StarshipCard/starshipCard';

const StarshipList = ({starships = []}) =>{
    return(
        <section>
            <ul>
                {starships.map((ship, index) =>{
                    return(
                        <StarshipCard key={index} ship={ship}/>
                    )
                })}
            </ul>
        </section>
        
    )
}

export default StarshipList