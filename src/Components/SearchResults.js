import React from "react";

function SearchResults({ holidays }) {
   
    if (!holidays) {return <h3>There are no holidays to display</h3>
    }

    return (
			<div className='show__page'>
				{holidays.map((holiday, index) => (
					<div key={index}>
						<h2>{holiday.name}</h2>
						{/* description={holidays.description}
						country={holidays.country.name}
						year={holidays.date.datetime}
						type={holidays.type}
						location={holidays.locations}
						states={holidays.states}
						/> */}
					</div>
				))}
			</div>
		);
}

export default SearchResults;