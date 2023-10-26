import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import {themeOptions} from "./theme";
import {createTheme} from "@mui/material";
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import MovieDetail from "./components/movieDetail";

const App = () => (
    <ThemeProvider theme={createTheme(themeOptions)}>
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/movie" Component={MovieDetail}/>
                <Route path="*" Component={NotFound}/>
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;
