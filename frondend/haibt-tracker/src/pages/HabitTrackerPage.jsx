import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import SliderCalendar from "../components/CalendarSlider";

const HabitTrackerPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto py-8">
                    {/* Slider Calendar */}
                    <SliderCalendar></SliderCalendar>

                    {/* Progress Bars */}
                    <div className="bg-white shadow-md p-4 rounded-lg mb-8">
                        <h2 className="text-xl font-bold mb-4">Progress</h2>
                        <div className="space-y-4">
                            {/* Sample progress bars - replace with dynamic content */}

                                <div  className="flex justify-between items-center">
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div className="bg-[#B43FEB] h-4 rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                </div>

                        </div>
                    </div>

                    {/* Add Habit Button */}
                    <div className="text-center mb-8">
                        <button className="bg-[#B43FEB] text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">Add Habit</button>
                    </div>

                    {/* Habit List */}
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Today's Habits</h2>
                        <ul>
                            {/* Sample habit items - replace with dynamic content */}
                            {Array.from({ length: 3 }, (_, i) => (
                                <li key={i} className="flex justify-between items-center p-2 border-b">
                                    <div>
                                        <div className="font-bold">Habit {i + 1}</div>
                                        <div className="text-gray-600">Description</div>
                                    </div>
                                    <div>
                                        <button className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition-colors">Done</button>
                                        <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 transition-colors ml-2">Edit</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-colors ml-2">Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HabitTrackerPage;