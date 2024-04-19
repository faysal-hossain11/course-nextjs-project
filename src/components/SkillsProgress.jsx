import React from 'react';

const SkillsProgress = () => {
  return (
    <div className="skills-bar">
      <h3 className="title-text">Skills</h3>
      <div className="skill-progress">
        <div className="progress-section">
          <div className="meta-info d-flex justify-content-between">
            <p>Business Consulting</p>
            <p>60%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar business"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="progress-section">
          <div className="meta-info d-flex justify-content-between">
            <p>Tax Consulting</p>
            <p>70%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar tax"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="progress-section">
          <div className="meta-info d-flex justify-content-between">
            <p>Art Design</p>
            <p>80%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar design"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="progress-section">
          <div className="meta-info d-flex justify-content-between">
            <p>UI&UX Design</p>
            <p>70%</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar uiDesign"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;
