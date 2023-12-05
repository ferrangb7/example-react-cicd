import { useState } from "react"
import { CountryCard } from "./CountryCard";
import { getCountryByName } from "../api/getCountryByName";
import { Error } from "./Error";
import { newReliclogs } from "../api/newReliclogs";

export const Search = () => {

    const [ countries, setCountries ] = useState([]);
    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        const data = await getCountryByName(inputValue);
        setCountries(data);
        setInputValue('');
        data.forEach( async cty => {
            await newReliclogs(`Country Searched: ${ cty.name.common }`);
        });
    };    

    return(
        <>
            <div className="row search">
                <div className="col-3">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit } aria-label="form">
                        <input
                            type="text"
                            placeholder="Search a country"
                            className="form-control"
                            autoComplete="off"
                            value={ inputValue }
                            onChange={ onInputChange }

                        />
                        <button className="btn btn-outline-primary mt-2">
                            search
                        </button>
                    </form>
                </div>
                <div className="col-9">

                    <h4>Results</h4>
                    <hr />
                    {
                        countries ? countries.map(cty => (
                            <CountryCard key={ cty.population } cty={ cty } />
                        )) : <Error />
                    }
                </div>
            </div>
        </>
    )
}
