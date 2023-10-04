import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom'
const SearchImage = (props) => {
    const [data, setData] = useState(null);
    const { kw } = useParams();
    useMemo(() => {
        fetch(`https://images-api.nasa.gov/search?q=${kw}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [kw]);
    
    if (data){
        const items = data.collection.items.slice(0, 5) || [];
        if (items.length) {

            const lists = items.map((i, index) => {
                if (i.links?.length){
                    return (<img alt={`${i.data[0].title}`} src={`${i.links[0].href}`} />)
                }
                return (<></>);
            });
            return <>{lists}</>
        }
        else {
            return (<div>No match found. Try another keyword.</div>);
        }
    }
    else{
        return <div> waiting for api...</div>
    }
}

export default SearchImage;