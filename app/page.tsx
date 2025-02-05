import '../app/globals.css';
import '../app/page.css';
import '../app/components/search.tsx';

export default function Home() {
  return (
    <div className="container"> 
       <h1>Welcome to thy castle</h1>

     <div className="search">
       <h1>Search</h1>
       <p>My search page.</p>
     </div>
    </div>
  );
}
