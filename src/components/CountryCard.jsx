
import { useEffect, useState } from "react"
import { getInfo } from "../helpers/getInfo"
import axios from "axios";

export const CountryCard = ({ cty }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImage = async ( countryName ) => {
            try {
                const { data } = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: `${import.meta.env.VITE_API_KEY}`
                    },
                    params: {
                        query: countryName,
                        per_page: 5,
                        page: 1,
                    }
                })
                setImages(data.photos)
            } catch (err) {
                console.error(err);
            }
        }
        getImage(cty.name.common)
    }, [])
    

    return (
        <div className="card country">
            <img src={ cty.flags.svg } className="card-img-top" alt="..." />
            <div className="card-body">
                  <h5 className="card-title"> { cty.name.common } </h5>
                  <p className="card-text">{ cty.flags.alt }</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Population: { cty.population }</li>
              <li className="list-group-item">Language: { getInfo(cty.languages) }</li>
              <li className="list-group-item">Currenci: { getInfo(cty.currencies) }</li>
            </ul>
            <div className="card-body">
                <div className="card-group">
                {
                    images.map(img => (
                        <div className="card" key={img.id}><img src={ img.src.tiny } className="card-img-top" alt={ img.photographer }></img></div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
