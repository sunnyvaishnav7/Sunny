import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Java Developer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE-1 Java Developer</h4>
                <h5>Artan Consulting Pte. Ltd., Singapore</h5>
              </div>
              <h3>Jan 2025 – Jul 2025</h3>
            </div>
            <p>
              Worked as a Java Full Stack Developer. Built backend APIs using
              Java and Spring Boot and contributed to frontend modules using
              React. Participated in development of scalable enterprise
              applications and collaborated with cross-functional teams.
            </p>
          </div>

          {/* Follow-up Manager */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Follow-up Manager</h4>
                <h5>National Record Retrieval</h5>
              </div>
              <h3>Sep 2025 – Mar 2026</h3>
            </div>
            <p>
              Managed client follow-ups and document retrieval processes.
              Coordinated with internal teams and healthcare providers to
              ensure timely record processing and issue resolution.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;