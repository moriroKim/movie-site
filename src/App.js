import './App.css';
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}></Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
        </Routes>
    );
}

export default App;
