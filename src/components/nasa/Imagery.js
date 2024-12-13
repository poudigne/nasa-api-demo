import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom'
const Imagery = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";
    const [data, setData] = useState(null); 
    const { lon,lat } = useParams();

    const [lontitude, setLontitude] = useState(lon); // -73.58
    const [latitude, setLatatitude] = useState(lat); // 45.44


    // call the API on render if dependencies has changed 
    useEffect(() => {
        if (lon && lat) {
            fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lontitude}&lat=${latitude}&dim=0.15&api_key=${apikey}`)
            .then(response => response.status != 404 ? response.blob() : new Blob())
            .then(blob => setData(blob))
            .catch(error => console.error(error));
        }
    }, [lon, lat]);
    
    if (data){ // when we have the API data
       return data.size > 0 // if the blob has a size
        ? (<img src={URL.createObjectURL(data)} />) // convert the binary to image.
        : (<div>No image found for those coordinates</div>)  // otherwise display the no image message
    }
    // otherwise display a message we're waiting for the API
    else{ 
        return <div> waiting for api...</div>
    }
}

export default Imagery;