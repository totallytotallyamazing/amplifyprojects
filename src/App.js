import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousels from './components/Carousels';
import CounterRedux from './components/CounterRedux';
import EmployeesRedux from './components/EmployeesRedux';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RowColRedux from './components/RowColRedux';
import UserListRedux from './components/UserListRedux';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/carousels'} element={<Carousels />} />
                <Route path={'/counter'} element={<CounterRedux />} />
                <Route path={'/employees'} element={<EmployeesRedux />} />
                <Route path={'/rowcol'} element={<RowColRedux />} />
                <Route path={'/users'} element={<UserListRedux />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;