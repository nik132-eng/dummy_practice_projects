import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomSelection from './components/RoomSelection';
import VideoCall from "./components/VideoCall";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoomSelection />} />
                <Route path="/call/:roomId" element={<VideoCall />} />
            </Routes>
        </Router>
    );
}

export default App;