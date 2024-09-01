import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-md py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/" className="text-white hover:text-[#B43FEB] transition-colors">
                        Daily Habit Tracker
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-[#B43FEB] transition-colors">Home</Link>
                    <Link to="/habits" className="text-white hover:text-[#B43FEB] transition-colors">Habits</Link>
                </div>
                <button className="bg-[#B43FEB] text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                    Add Habit
                </button>
            </div>
        </nav>
    );
};

export default Navbar;