import Link from 'next/link';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer-banner'>
            <ul className='footer-links'>
                <li className="for-business"><Link href="/partners">For Business</Link></li>
                <li className="learning-resource"><Link href="/resources">Learning Resources</Link></li>
            </ul>
            <p className='footer-datetime'> Cantor College &copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>
    );
}
export default Footer;