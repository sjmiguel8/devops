import '../app/globals.css';
import '../app/page.css';
import '../app/components/search.tsx';
import Search from '../app/components/search';
import JobSearch from './components/jobsearch';

export default function Home() {
  return (
    <div className="container"> 
       <h1>Welcome to thy castle</h1>
        <Search />
        <JobSearch />
    </div>

  );
}

