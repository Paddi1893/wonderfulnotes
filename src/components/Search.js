import React from "react";

const Search = ({filterByText, filterByState, filterByTopic, topics}) => {
    let number = 0;
    return(
        <div>
            <h2 className="f2 b ttu tracked">List:</h2>
            
            {/* filter by text */}
            <input className="ma1" type="search" placeholder="filter by content" onChange={filterByText}></input>
            
            {/* filter by topic */}
            <select className="ma1" onChange={filterByTopic}>
                <option value="">Filter by topic</option>
                {
                    topics.map(topic => {
                        return <option key={number--} value={topic}>{topic}</option>
                    })
                }
            </select>

            {/* filter by state */}
            <select className="ma1" onChange={filterByState}>
                <option value="">Filter by state</option>
                <option value="completed">completed</option>
                <option value="in progress">in progress</option>
                <option value="not started">not started</option>
            </select>
        </div>
    )
}
export default Search;