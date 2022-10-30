import { useEffect, useState } from "react";
import { fetchCities } from "../../../helpers/amazon";



const CitiesDropdown = ({id, name, country, onChange = () => {}}) => {

  const [cities, setCities] = useState([]);

    useEffect(()=> {
        fetchCities().then((city) => {
            setCities(city);
        });
    }, []);
    const citiesSpecificCountry = cities.filter(function (city) {
      return city.country_code == country;
    });

    const citiesSpecificCountrySorted = citiesSpecificCountry.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    //console.log(newArray);

    return (
        <select id={id || name} name={name || id} onChange={onChange}>
          <option value=''>Cidade</option>
          {citiesSpecificCountrySorted.map((city) =>{
                const {country_code, id, name} = city;
                
                return (<option key={id} value={name}>{name}</option>)
            })}
        </select>
    )
};

export default CitiesDropdown;

