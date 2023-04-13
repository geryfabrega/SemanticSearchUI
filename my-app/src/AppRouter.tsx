import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/mainPage/MainPage';
import SearchResults from './pages/searchResults/SearchResults';

const getSubdomain = (): string | null => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length >= 3) {
      return parts[0];
    }
    return null;
  };
  
const AppRouter: React.FC = () => {
    const subdomain = getSubdomain();
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/results/:query" Component={SearchResults}/>
            </Routes>
        </Router>
    );
    };

    export default AppRouter;
