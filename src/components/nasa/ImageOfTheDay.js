import React, { useState, useEffect } from 'react';

const ImageOfTheDay = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    if (data) {
        return (<div>
            <img alt={`${data.title}`} src={data.url} />
            <p>Picture by : {data.copyright}</p>
            <p>Title : {data.title}</p>
            <p>Description: {data.explanation}</p>
        </div>)
    }
    else {
        <div>Waiting for api...</div>
    }

}

export default ImageOfTheDay;