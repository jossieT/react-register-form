import React, { useState } from 'react';

const NestedDropdown = ({ options, selectedValues, onSelectionChange }) => {
    const [mainEvent, setMainEvent] = useState('');
    const [subEvents, setSubEvents] = useState([]);

    const handleMainEventChange = (event) => {
        const { value } = event.target;
        setMainEvent(value);
        setSubEvents([]);
        onSelectionChange([value, []]);
    };

    const handleSubEventChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSubEvents((prevSubEvents) => [...prevSubEvents, value]);
        } else {
            setSubEvents((prevSubEvents) => prevSubEvents.filter((subEvent) => subEvent !== value));
        }
        onSelectionChange([mainEvent, subEvents]);
    };

    return (
        <div style={{ width: '100%', marginBottom: '20px', border: '0px' }}>
            <select
                value={mainEvent}
                onChange={handleMainEventChange}
                style={{ width: '100%', padding: '10px', fontSize: '15px' }}
            >
                <option value="">Select Main Style</option>
                {options[0].map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {mainEvent && (
                <div>
                    {options[1][options[0].findIndex((option) => option.value === mainEvent)].map((subEventOption) => (
                        <div key={subEventOption.value}>
                            <input
                                type="checkbox"
                                value={subEventOption.value}
                                checked={subEvents.includes(subEventOption.value)}
                                onChange={handleSubEventChange}
                            />
                            <label>{subEventOption.label}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NestedDropdown;
