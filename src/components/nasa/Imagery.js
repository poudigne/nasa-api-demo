import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom'
const Imagery = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";
    const [data, setData] = useState(null); 
    const { lon,lat } = useParams();

    const [lontitude, setLontitude] = useState(lon); // 100.75
    const [latitude, setLatatitude] = useState(lat); // 1.5


    // call the API on render if dependencies has changed 
    useEffect(() => {
        if (lon && lat) {
            fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lontitude}&lat=${latitude}&dim=0.25&api_key=${apikey}`)
            .then(response => response.blob())
            .then(blob => setData(blob))
            .catch(error => console.error(error));
        }
    }, [lon, lat]);
    
    if (data){ // when we have the API data
       return (<img src={URL.createObjectURL(data)} />) // convert the binary to image.
    }
    // otherwise display a message we're waiting for the API
    else{ 
        return <div> waiting for api...</div>
    }
}

export default Imagery;