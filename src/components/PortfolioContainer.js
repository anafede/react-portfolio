import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import navTabs from './navTabs';

import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'About'){
        return <About />;
    };
    if (currentPage === 'Portfolio'){
        return <Portfolio />;
    };
    if (currentPage === 'Resume'){
        return <Resume />;
    };
    return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header />
            <navTabs currentPage={currentPage} handlePageChange = {handlePageChange} />
            {renderPage}
            <Footer />
        </div>
    )};