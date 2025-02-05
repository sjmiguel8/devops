'use client'

import axios, { AxiosRequestConfig } from 'axios';
import '../styles/jobsearch.css';
import React, { Key } from 'react';

interface Job {
    job_id: Key | null | undefined;
    job_title: string;
    job_description: string;
    job_employer_name: string;
}

interface JobSearchState {
    searchResults: Job[];
    error: string | null;
}

class JobSearch extends React.Component<object, JobSearchState> {
    constructor(props: object) {
        super(props);
        this.state = {
            searchResults: [],
            error: null,
        };
    }

    async componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: 'developer jobs in chicago',
                page: '1',
                num_pages: '1',
                country: 'us',
                date_posted: 'all'
            },
            headers: {
                'x-rapidapi-key': '5c307ae576mshb6b3574f1f360e1p19ad0bjsnf53687848ffc',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options as AxiosRequestConfig);
            this.setState({
                searchResults: response.data.data,
                error: null,
            });
        } catch (error) {
            this.setState({
                searchResults: [],
                error: 'An error occurred while fetching the search results.',
            });
            console.error(error);
        }
    }

    render() {
        const { searchResults, error } = this.state;

        if (error) {
            return <div className="error-message">{error}</div>;
        }

        return (
            <div className="job-listings">
                <h2>Developer listings</h2>
                {searchResults.map((job: Job) => (
                    <div key={job.job_id} className="job-card">
                        <div className="job-header">
                            <h3 className="job-title">{job.job_title}</h3>
                            <div className="job-company">{job.job_employer_name}</div>
                        </div>
                        <div className="job-description">
                            {job.job_description}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default JobSearch;
