import '../styles/navbar.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li> <Link href="/" className="active">Software</Link></li>
                    <li><a href="/devops">DevOps</a></li>
                    <li><a href="/fullstack">FullStack</a></li>
                </ul>
            </nav>
        </div>

    );
}


