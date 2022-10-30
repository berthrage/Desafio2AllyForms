import { useEffect, useState } from "react";
import { fetchCountries } from "../../../helpers/amazon";

const CountriesDropdown = ({id, name, onChange} = () => {}) => {

    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetchCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const countriesSorted = countries.sort(function (a, b) {
        return a.name_ptbr.localeCompare(b.name_ptbr);
      });

    return (
        <select id={id || name} name={name || id} onChange={onChange}>
            <option value=''>País</option>
            {countriesSorted.map((country) =>{
                const {code, name_ptbr} = country;
                return (<option key={code} value={code}>{name_ptbr}</option>)
            })}
        </select>
    )
};

export default CountriesDropdown;