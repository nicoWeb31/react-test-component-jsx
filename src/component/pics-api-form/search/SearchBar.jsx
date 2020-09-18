import React, { useState } from 'react';

const SearchBar = ({valueInput}) => {


    const [input, setInput] = useState({
        search: "",

    })

    const handleInputChange = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
        setInput({ ...input, [name]: value })
    }


    const onSubmitChange = (e) =>{
        e.preventDefault();
        valueInput(input.search)
    }


    console.log(input)

    return (


        <div className="ui segment">
            search bar

            <form className="ui form" onSubmit={onSubmitChange}>
                <div className="field">
                    <label htmlFor="" className="">Image search</label>
                    <input type="text"
                        name="search"
                        value={input.value}
                        className=""
                        onChange={handleInputChange}

                    />
                </div>
            </form>

        </div>
    );
}

export default SearchBar;