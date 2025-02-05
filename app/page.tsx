import '../app/globals.css';
import '../app/page.css';
import '../app/components/search.tsx';
import JobSearch from './components/jobsearch';

export default function Home() {
  return (
    <div className="container"> 
       <h1>Job Listings:</h1>
        <JobSearch />
    </div>

  );
}

