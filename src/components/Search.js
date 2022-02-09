import React from 'react';

export const Search = ({ search, setSearch }) => {

    const showSearch = (event) => {
        setSearch(event.target.value)
    }

    return <div>
        <div className='left'>
            <form action="/" >
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search..."
                    value={search}
                    onChange={showSearch}
                />
                <button type="submit">Go</button>
            </form>
        </div>

    </div>
};
