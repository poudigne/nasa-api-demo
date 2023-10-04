import React, { useState, useEffect } from 'react';

const MarsWeather = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${apikey}&feedtype=json`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

console.log(data);

    if (data) {
        return (<div>Looks broken, still kept it in the project. API don't return valid DATA as of the making of this project.
            {/* <img src={data.url} />
            <p>Picture by : {data.copyright}</p>
            <p>Title : {data.title}</p>
            <p>Description: {data.explanation}</p> */}
        </div>)
    }
    else {
        <div>Waiting for api...</div>
    }

}

export default MarsWeather;