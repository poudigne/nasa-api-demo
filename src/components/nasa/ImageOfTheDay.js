import React, { useState, useEffect } from 'react';

const ImageOfTheDay = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";

    // create a state for the result
    const [data, setData] = useState(null);

    // call the API on render if dependencies has changed
    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [apikey, setData]);

    // if data are avaiable return the image
    if (data) {
        return (<div>
            <img alt={`${data.title}`} src={data.url} />
            {data.copyright && (<p>Picture by : {data.copyright}</p>)}
            <p>Title : {data.title}</p>
            <p>Description: {data.explanation}</p>
        </div>)
    }
    // dislay a message while we're waiting for the API response
    else {
        <div>Waiting for api...</div>
    }

}

export default ImageOfTheDay;