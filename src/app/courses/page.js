
import fetchCourses from "@/lib/db";
import './courses.css';

const Courses = async () => {
  const courselist = await fetchCourses();

  const courseImages = {
    1: "/course-images/Computing.jpg",alt: "An image representing the Computing course",
    2: "/course-images/Computer-Networks.jpg",alt:"An image representing the Computing networks course",
    3: "/course-images/Cyber-Security-with-Forensics.jpg",alt: "An image representing Cyber Security with Forensics course",
    4: "/course-images/Computer-Science-for-Games.jpg", alt: "An image representing Computer Science for Games course",
    5: "/course-images/Software-Engineering.jpg",alt: "An image representing Software Engineering Course course",
    6: "/course-images/Computer-Science.jpg", alt: "An image representing Computer Science Course",
    7: "/course-images/Computing-with-Foundation-Year.jpg", alt: "An image representing Computing with Foundation Year course",
    8: "/course-images/Cyber-Security-with-Forensics-with-Foundation-Year.jpg", alt: "An image representing Cyber Security with Forensics with Foundation Year course",
    9: "/course-images/Software-Engineering-with-Foundation-Year.jpg", alt: "An image representing Software Engineering with Foundation Year course",
    10: "/course-images/Cyber-Security-with-Foundation-Year.jpg", alt: "An image representing Cyber Security with Foundation Year course",
    11: "/course-images/Information-Technology-with-Business-Studies-with-Foundation-Year.jpg", alt: "An image representing Information Technology with Business Studies with Foundation Year course",
    12: "/course-images/Computer-Science-with-Foundation-Year.jpg", alt: "An image representing Computer Science with Foundation Year course",
    13: "/course-images/Computer-Science-for-Games-with-Foundation-Year.jpg", alt: "An image representing Computer Science for Games with Foundation Year course",
    14: "/course-images/Business-and-Digital-Technology-with-Foundation-Year.jpg", alt: "An image representing v course",
    15: "/course-images/Graphic-Design.jpg", alt: "An image representing Graphic Design course",
    16: "/course-images/Interior-Architecture-and-Design.jpg", alt: "An image representing Interior Architecture and Design course",
    17: "/course-images/Jewellery-Materials-and-Design.jpg", alt: "An image representing Jewellery, Materials and Design course",
    18: "/course-images/Game-Design-and-Development.jpg", alt: "An image representing Game Design and Development course",
    19: "/course-images/Product-Design.jpg", alt: "An image representing Product Design course",
    20: "/course-images/Product-Design-1.jpg", alt: "An image representing Product Design course",
    21:"/course-images/Digital-Media-Production.jpg", alt: "An image representing Digital Media Production course",
  };
 
  return (
    <div className="course-container">
      <h2>Courses We Offer</h2>

      <div className="course-list">
        {courselist.map((course) => {
          const courseImage = courseImages[course.CourseID] || "/course-images/default.jpg";

          return (
            <div key={course.CourseID} className="course-item">
              <div className="course-image">
                <img
                  src={courseImage}
                  alt={course.CourseTitle}
                  width={500}
                  height={400}
                  quality={75}
                />
              </div>
              <h3>{course.CourseTitle}</h3>
              <div className="course-details">
                <div>
                  <p>Course Award: {course.CourseAwardName}</p>
                  <p>Ucas Code: {course.UcasCode}</p>
                  <p>Ucas Points: {course.UcasPoints}</p>
                </div>
                <div>
                  <p>Year of Entry: {course.YearOfEntry}</p>
                  <p>Mode of Attendance: {course.ModeOfAttendance}</p>
                  <p>Duration: {course.StudyLength}</p>
                </div>
                <div>
                  <p>Foundation Year: {course.HasFoundationYear === 'true' ? "Yes" : "No"}</p>
                  <p>Course Subject: {course.CourseSubject}</p>
                  <p>Recruiting: {course.NoLongerRecruiting === 'true' ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );C
};

export default Courses;
