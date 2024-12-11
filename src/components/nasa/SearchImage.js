import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom'
const SearchImage = (props) => {
    const [data, setData] = useState(null);

    // get the Keyword from the URL
    const { kw } = useParams();

    // call the API on render if dependencies has changed 
    useEffect(() => {
        fetch(`https://images-api.nasa.gov/search?q=${kw}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [kw]);
    
    if (data){ // when we have the API data
        const items = data.collection.items.slice(0, 5) || []; // take only the first 5 results for simplicity
        // if we have something in the array
        if (items.length) {

            const lists = items.map((i, index) => {
                if (i.links?.length){ // if the result contains a link
                    return (<img alt={`${i.data[0].title}`} src={`${i.links[0].href}`} />) // diplay the image HTML tag
                }
                return null; // if it doesn't contains a link, then we display nothing.
            });
            return <>{lists}</> // display the list of images.
        }
        // when API return result with no entry. display a no result message
        else { 
            return (<div>No match found. Try another keyword.</div>);
        }
    }
    // otherwise display a message we're waiting for the API
    else{ 
        return <div> waiting for api...</div>
    }
}

export default SearchImage;