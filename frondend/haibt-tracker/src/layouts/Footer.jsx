import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 mt-8">
            <div className="container mx-auto text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Daily Habit Tracker. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/privacy" className="hover:text-teal-400">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:text-teal-400">
                        Terms of Service
                    </a>
                    <a href="/contact" className="hover:text-teal-400">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;