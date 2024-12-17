import Navbar from './Components/Navbar'; 
import Footer from './Components/footer';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="he College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others." />
        <title>Cantor College</title>
      </head>
      <body>
        <div className='container'>
          <Navbar /> 
          <div className='content'>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
