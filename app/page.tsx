import '../app/globals.css';
import '../app/page.css';
import '../app/components/search.tsx';
import JobSearch from './components/jobsearch';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="title"> 
      <Navbar />
      <h1>Get Request Job Listings:</h1>
      <JobSearch />
    </div>

  );
}

