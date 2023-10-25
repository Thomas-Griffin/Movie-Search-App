import React from 'react';

const MovieSearchBox = (props: { value: string | number | readonly string[] | undefined; setSearchValue: (arg0: string) => void; }) => {
    return (
        <div className='col col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Find a movie...'
            ></input>
        </div>
    );
};

export default MovieSearchBox;