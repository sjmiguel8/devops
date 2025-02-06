import '../styles/navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="/" className="active">Software</a></li>
                    <li><a href="/devops">DevOps</a></li>
                    <li><a href="/fullstack">FullStack</a></li>
                </ul>
            </nav>
        </div>

    );
}


