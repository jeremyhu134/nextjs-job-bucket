"use client";
import React, {useState} from 'react'

interface DropdownSortProps {
    sortOption: string;
    onSortChange: (option: string) => void;
}

const DropdownSort = ({sortOption, onSortChange}:DropdownSortProps) => {

    const handleSortChange = (option: string) => {
        onSortChange(option);
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }

    return (
        <div className="dropdown">
            <label tabIndex={0} role="button" className="btn m-1 text-black">
                Sort by: {sortOption}
            </label>
            <ul tabIndex={0} className="dropdown-content text-black menu z-10 w-52 rounded-box bg-base-100 p-2 shadow-sm">
                <li>
                    <button className="cursor-pointer" onClick={() => handleSortChange('Date Applied')}>
                        Date Applied
                    </button>
                </li>
                <li>
                    <button className="cursor-pointer" onClick={() => handleSortChange('Company Name')}>
                        Company Name
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropdownSort
