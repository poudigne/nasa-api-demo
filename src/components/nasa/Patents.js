import React, { useState, useMemo, useEffect } from 'react';
// eslint-disable-next-line
import patents from './patents.css'
import { useParams } from 'react-router-dom'

const Patents = (props) => {
    const apikey = "0gJkIo5vk3djhMQdgdS1fanNc3Agn4H6wCwbTfk5";

    // create a state for the result
    const [data, setData] = useState(null);

    // read the URL parameter for the research
    const { patent } = useParams();

    // call the API on render if dependencies has changed
    useEffect(() => {
        fetch(`https://api.nasa.gov/techtransfer/patent/?${patent}&api_key=${apikey}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [patent, setData, apikey]);

    if (data) { // if we have API Results
        if (data.results.length) { // when we have a response 
            const lists = data.results.map((i) => { // for each patent in the result
                return (<div>
                    <p>Patent Number : {i[1]}</p> {/* display the patent number */}
                    <p dangerouslySetInnerHTML={{ __html: `Title: ${i[2]}` }}></p> {/* display the title in a safely manner, since it can contains HTML, so it's interpreted. */}
                    <p dangerouslySetInnerHTML={{ __html: `Description: ${i[3]}` }}></p> {/* display the Description in a safely manner, since it can contains HTML, so it's interpreted. */}
                    <p><a target='_blank' rel="noreferrer" href={`${i[10]}`}>See Picture</a></p> {/* display the link that redirect to the image of the patent. */}
                    <hr />
                </div>)

            });
            return <>{lists}</>
        }
        // when we have a response but no entry
        else {
            return <div>No result found. Try another keyword.</div>
        }
    }
    // otherwise display we're waiting for API 
    else {
        return <div> waiting for api...</div>
    }
}

export default Patents;