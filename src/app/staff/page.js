import Image from "next/image";
import "./staff.css"; // Import the CSS file

const Staff = () => {
  const staffData = [
    {
      title: "News",
      description:
        "Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one-day event.",
      image: "/staff-images/Event.jpg",
      alt: "Event showcasing Software Engineering awards",
    },
    {
      title: "Academic Registry",
      description:
        "For academic regulations, assessment, awards, student records, and course validation.",
      image: "/staff-images/Academic-Registry.jpg",
      alt: "Academic Registry services illustration",
    },
    {
      title: "Catering Services",
      description:
        "Contact the Catering Services regarding on and off-site catering.",
      image: "/staff-images/Catering-Services.jpg",
      alt: "Catering services at Cantor College",
    },
    {
      title: "Financial Services",
      description:
        "The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.",
      image: "/staff-images/Financial-Services.jpg",
      alt: "Financial Services office",
    },
    {
      title: "Information Systems Services",
      description:
        "The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.",
      image: "/staff-images/Information-Systems-Services.jpg",
      alt: "Information Systems Services team working",
    },
    {
      title: "Marketing Services",
      description:
        "The Marketing Team will help promote events and new courses. They will help with press release preparation.",
      image: "/staff-images/Marketing-Services.jpg",
      alt: "Marketing services promotional materials",
    },
    {
      title: "Personnel Services",
      description:
        "All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.",
      image: "/staff-images/Personnel-Services.jpg",
      alt: "Personnel Services team at work",
    },
    {
      title: "Facilities",
      description:
        "The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.",
      image: "/staff-images/Facilities.jpg",
      alt: "Facilities maintenance team",
    },
  ];

  return (
    <div className="staff-container">
      <h2>Information for Staff</h2>
      {staffData.map((item, index) => (
        <div key={index} className="staff-card">
          <Image src={item.image} width={300} height={200} alt={item.alt} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;
