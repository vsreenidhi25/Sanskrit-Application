'use client';

import React, { useState } from 'react';

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0);
    const [round, setRound] = useState(0);
    const [audioInstances, setAudioInstances] = useState<{ [key: string]: HTMLAudioElement | null }>({});

    const sounds: { [key: string]: string } = {
        "Om": "/word1.mp3",
        "Om Namah Shivaya": "/word2.mp3",
        "Om Gan Ganpataye Namaha": "/word3.mp3",
        "Hare Krishna Mahamantra": "/word4.mp3"
    };

    const toggleSound = (key: string) => {
        if (audioInstances[key]) {
            // Stop and reset if the audio is already playing
            audioInstances[key]?.pause();
            audioInstances[key].currentTime = 0;
            setAudioInstances(prev => ({ ...prev, [key]: null }));
        } else {
            // Play new audio and track it
            const audio = new Audio(sounds[key]);
            audio.play();
            setAudioInstances(prev => ({ ...prev, [key]: audio }));
        }
    };

    const total = count + round * 108;

    const plusCount = () => {
        if (count >= 108) {
            setCount(0);
            setRound(round + 1);
        } else {
            setCount(count + 1);
        }
    };

    const resetApp = () => {
        setCount(0);
        setRound(0);
    };

    return (
        <div className="container bg-gray-200 min-h-screen flex flex-col items-center justify-center p-4 relative">
            {/* Mantras in Top-Left Corner */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {Object.keys(sounds).map((key) => (
                    <button 
                        key={key} 
                        onClick={() => toggleSound(key)} 
                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 transition text-left w-64 whitespace-nowrap"
                    >
                        🔊 {key}
                    </button>
                ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-orange-500 bg-white p-4 rounded-lg shadow-lg">Select a Mantra & Start</h1>

            {/* Counter Display */}
            <div className="counter-box bg-white p-6 rounded-lg shadow-lg text-center text-xl font-semibold mt-10">
                <p>Rounds Completed: <span className="font-bold text-green-600">{round}</span></p>
                <p>Count: <span className="font-bold text-red-500">{total}</span></p>
            </div>

            {/* Increment Button */}
            <div className="button-box mt-6">
                <button className="w-32 h-32 bg-yellow-500 text-white text-xl rounded-full shadow-md flex justify-center items-center hover:bg-yellow-600 transition" onClick={plusCount}>+</button>
            </div>

            {/* Reset Button */}
            <button className="fixed bottom-4 right-4 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-700 transition" onClick={resetApp}>Reset</button>
        </div>
    );
};

export default CounterApp;
