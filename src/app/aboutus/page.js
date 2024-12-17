import './about.css';
import Image from 'next/image';
const About = () => {
    return (
        <div className="about-container">

            <Image src="/cantor-building-about-page.jpeg"
                width={1080} height={810} alt="An image representing a cantor college main building"></Image>
            <h2>About Us</h2>
            <div>
            <p>
                Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need
                to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities
                that can give you the edge when you enter the world of work, through our teaching and our links to some of
                the world's leading researchers and employers. Our students have gone on to successful
                careers in a wide range of industries across the globe.  Whatever your ambitions,
                our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.
            </p>
            
            <h3>Facilities</h3>
            <p>
                The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories,
                and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
            </p>
            <p>
                Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.
            </p>
            <h3>Facilities include:</h3>
            <ul>
                <li>wi-fi technology</li>
                <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li>specialist faculty facilities</li>
                <li>a double height lecture theatre at first and second floor level</li>
                <li>dramatic three-storey glass open atrium</li>
                <li>meeting rooms</li>
                <li>office accommodation</li>
                <li>specialist IT facilities</li>
                <li>reception desk area</li>
                <li>catering outlet</li>
                <li>parking for disabled badge holders</li>
                <li>cycle racks</li>
                <li>gallery</li>
                </ul>
            </div>
        </div>
    );
}
export default About;