import React from "react";

const FilterCategory = ({ category }) => {
    const name = category.name;
    const options = category.options;

    return (
        <li className="FilterCategory">
            <div className="category-name">{name}</div>
            <div className="options-container">
                {options.map((option, index) => {
                    const uid = name + '_' + index;
                    return (
                        <div key={uid} className="option">
                            <input type="radio" id={uid} name={name} value={option} />
                            <label htmlFor={uid}>{option}</label>
                        </div>
                    )
                })}
            </div>
        </li >
    );
}

export default FilterCategory;