// src/components/SliderCalendar.jsx
import React, { useState, useContext } from 'react';
import { DateContext } from '../contexts/DateContext';

const SliderCalendar = () => {
    const { currentDate, setCurrentDate } = useContext(DateContext);
    const [startDate, setStartDate] = useState(new Date());

    // Get the start and end dates of the week
    const getWeekDates = (date) => {
        const startOfWeek = date.getDate() - date.getDay(); // Adjust to start from Sunday
        const weekDates = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(date.setDate(startOfWeek + i));
            weekDates.push(day);
        }

        return weekDates;
    };

    const weekDates = getWeekDates(new Date(startDate));

    // Handle previous and next week navigation
    const goToPreviousWeek = () => {
        setStartDate(new Date(startDate.setDate(startDate.getDate() - 7)));
    };

    const goToNextWeek = () => {
        setStartDate(new Date(startDate.setDate(startDate.getDate() + 7)));
    };

    // Handle day click
    const handleDayClick = (date) => {
        setCurrentDate(date);
    };

    // Function to check if a date is selected
    const isSelected = (date) => {
        return currentDate.toDateString() === date.toDateString();
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={goToPreviousWeek}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                    Previous
                </button>
                <div className="text-lg font-bold">
                    {`${weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`}
                </div>
                <button
                    onClick={goToNextWeek}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-4">
                {weekDates.map((date, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg text-center cursor-pointer transition-colors ${isSelected(date) ? 'bg-[#B43FEB] text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                        onClick={() => handleDayClick(date)}
                    >
                        <div className="text-lg font-bold">
                            {date.getDate()}
                        </div>
                        <div className="text-sm">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderCalendar;