import './sidebar.css'
import { useNavigate } from 'react-router-dom';
export default function Root() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.kw.value)
            navigate(`/search/${event.target.kw.value}`);
    }

    return (
        <>
            <div id="sidebar">
                <div>
                    <form id="search-form" role="search" onSubmit={(event) => handleSubmit(event)}>
                        <input
                            id="kw"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="kw"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>

                        <button type="submit" >Go</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/`}>Image of the day</a>
                        </li>
                        <li>
                            <a href={`/mars-weather`}>Mars Weather</a>
                        </li>
                        <li>
                            <a href={`/patents/engine`}>Engine Patents</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}