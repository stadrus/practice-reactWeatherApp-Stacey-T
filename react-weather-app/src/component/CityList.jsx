import { Link } from "react-router-dom";

const CityList = () =>{

    return(
        <div>
            <h2>New York</h2>
            <Link to= "./forecast/NewYork"></Link>
            <h2>London</h2>
            <Link to = "./forecast/London"></Link>
            <h2>London</h2>
            <Link to = "./forecast/Tokyo"></Link>
        </div>
    )
}

export default CityList;
