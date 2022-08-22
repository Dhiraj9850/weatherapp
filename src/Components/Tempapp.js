import React, { useEffect, useState } from 'react'
import "./Temp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'


const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState();

    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2d2b8373867163d1731cccd19cf7c68d`
            const res = await fetch(url);
            const parsedData = await res.json();
            // console.log(parsedData);
            setCity(parsedData.main);
        }
        fetchapi();
    }, [search])

    return (
        <div className="container">
            <h2 className="text-center">Weather app</h2>
            <div className="card">
                <div className="inputdata">
                    <input type="search" name="searchTerm" className="inputField" placeholder="Search..." value={search} aria-label="Search" onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                  
                  {!city ?(
                    <p className="errmsg">No Data found</p>
                  ):(
                    <div>
                    <div className="Info">
                    <h1 className="text-center">
                        <FontAwesomeIcon icon={faStreetView} className="street" /> {search}
                    </h1>
                    <div className="temp">
                        <h2>{city.temp}°Cel</h2>
                        <h6 className="Tempmin_max">Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel</h6>
                    </div>

                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                  )}
            

             
            </div>


        </div>
    )
}

export default Tempapp