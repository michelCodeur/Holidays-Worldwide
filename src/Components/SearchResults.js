import React from "react";

function SearchResults({ holidays }) {
   
    if (!holidays) {return <h3>There are no holidays to display</h3>
    }

    return (
        <div className="show__page">
            {holidays.map((holiday) => (
                <SearchResults name={holidays.name}
                               description={holidays.description}
                               country={holidays.country.name}
                               year={holidays.date.datetime}
                               type={holidays.type}
                               location={holidays.locations}
                               states={holidays.states}
                               />
            ))}
            
        </div>
    );
}

export default SearchResults;