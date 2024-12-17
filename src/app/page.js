import Image from "next/image";
import Link from "next/link";
import '../styles/home.css';

export default function Home() {
  return (
    <div className="container">
    
      <div className="banner">
        <Image src='/cantor-college.jpg'
          width={500}
          height={400}
          quality={75}
          alt='Cantor College'/>
      </div>
      <div className="overlay">
        <div className="text-box">
              <h1>Shaping the Future of Technology and Innovation</h1>
          <p>Cantor College fosters innovation in computing, design, and technology, offering specialized programs that empower students to excel in the digital world and meet industry demands.</p>
              <Link href="#" className="hero-btn">Visit Us to know More</Link>
          </div>
      </div>

      {/* Computing Course */}

      <h2>Computing Courses</h2>
      <section className="computing-course-container">
        <article className="computing-course-article card">
          <div>
            <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.</p>
            <p>
              The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.</p>
            <p>The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
            </div>
        </article>
        <div className="computing-course-img card">
          <Image src='/computing.jpg'
          width={800}
            height={600}
            quality={75}
          alt='Cantor College Location address' />
        </div>
      </section>

      {/* Design Course */}

      <h2>Design Courses</h2>
      <section className="design-course-container">
        <div className="design-course-img card">
          <Image src='/facility-images/play-station.jpg'
          width={800}
            height={600}
            quality={75}
          alt='Cantor College Location address' />
        </div>
        <article className="design-course-article card">
          <div>
          <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.</p>
          <p>
            The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
          </p>
          <p>You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.</p>
          </div>
        </article>
      </section>
{/* Location or Find us section */}
      <section className="location-container">
        <article className="location-address">
        <div className="address-container">
           <h3>How to find us:</h3>
          <address>
            <p>
              <span>Cantor College</span><br />
              <span>Main Street</span><br />
              <span>Sheffield</span><br />
              <span>SC4 2BB</span>
            </p>
            <p>
              <span>Tel: <Link href="tel:+4413212340235">(01321) 2340 235</Link></span><br />
              <span>Fax: (01321) 2340 236</span><br />
              <span>Email: <Link href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</Link></span>
            </p>
          </address>
        </div>
        </article>
        <div className="location-map">
          <Image src='/location.jpg'
            width={600}
            height={500}
            quality={75}
          alt='Cantor College Location address'/>
        </div>
      </section>
    </div>
  );
}
