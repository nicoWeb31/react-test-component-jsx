import React from 'react';


const List = ({ options, label,selected,onSeletedChange }) => {


    const renderOption = options.map(({ value, label }) => {
        return (
            <div className="item" key={value}>
                {label}
            </div>

        )
    })

    return (
        <>
            <h1>Liste - option - color</h1>
            <div className="ui form">
                <div className="field">
                    <label className='label'>
                        {label}
                    </label>
                    <div className="ui selection dropdown visible active">
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className="menu visible transition">
                            {renderOption}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;