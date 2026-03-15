import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h3 className="title">Certifications</h3>
        
        <div className="certifications-list">
          {/* Certificate 1 */}
          <div className="certification-item">
            <div className="cert-info">
              <h4>ISO 27001</h4>
              <h5>ISO</h5>
            </div>
            <div className="cert-year">
              <span>2023</span>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="certification-item">
            <div className="cert-info">
              <h4>Security Blue Team Beginner</h4>
              <h5>Security Blue Team</h5>
            </div>
            <div className="cert-year">
              <span>2022</span>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="certification-item">
            <div className="cert-info">
              <h4>Defence Security Operation</h4>
              <h5>Cybrary</h5>
            </div>
            <div className="cert-year">
              <span>2021</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certifications;
