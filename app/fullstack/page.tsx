'use client';

import React from 'react';
import '../styles/jobsearch.css';
import '../styles/fullstack.css';
import Navbar from '../components/navbar';
import FullStackSearchComponent from '../components/fullstackSearch';

export default function Page() {
    return (
        <div className="title">
            <Navbar />
            <h1>FullStack Jobs in Houston:</h1>
            <FullStackSearchComponent />
        </div>
    );
}
