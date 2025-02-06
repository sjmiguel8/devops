'use client';

import React from 'react';
import '../styles/jobsearch.css';
import '../styles/devops.css';
import Navbar from '../components/navbar';
import DevOpsSearchComponent from '../components/devopsSearch';

export default function Page() {
    return (
        <div className="title">
            <Navbar />
            <h1>DevOps Jobs in Houston:</h1>
            <DevOpsSearchComponent />
        </div>
    );
}
