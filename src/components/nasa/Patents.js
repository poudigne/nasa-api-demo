import React, { useState, useMemo } from 'react';
// eslint-disable-next-line
import patents from './patents.css'
import { useParams } from 'react-router-dom'

const Patents = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";

    const [data, setData] = useState(null);

    const { patent } = useParams();

    useMemo(() => {
        fetch(`https://api.nasa.gov/techtransfer/patent/?${patent}&api_key=${apikey}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [patent]);

    if (data) {
        if (data.results.length) {
            const lists = data.results.map((i) => {
                return (<div>
                    <p>Patent Number : {i[1]}</p>
                    <p dangerouslySetInnerHTML={{ __html: `Title: ${i[2]}` }}></p>
                    <p dangerouslySetInnerHTML={{ __html: `Description: ${i[3]}` }}></p>
                    <p><a target='_blank' rel="noreferrer" href={`${i[10]}`}>See Picture</a></p>
                    <hr />
                </div>)

            });
            return <>{lists}</>
        }
        else {
            return <div>No result found. Try another keyword.</div>
        }
    }
    else {
        return <div> waiting for api...</div>
    }
}

export default Patents;