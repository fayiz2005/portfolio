import React from 'react';

export function Education() {
  return (
    <div className="container my-5 text-white">
      <h2 className="mb-4">Education</h2>
      
      <div className="card bg-dark text-white border-light mb-3">
        <div className="card-body">
          <h4 className="card-title">University of British Columbia (UBC)</h4>
          <h6 className="card-subtitle mb-2">Starting Fall 2025</h6>
          <p className="card-text">
            Undergraduate student hoping to major in Computer Science and Mathematics. 
            Recipient of the <strong>Outstanding International Student (OIS) Award</strong>, granted for academic excellence and leadership potential.
          </p>
        </div>
      </div>

      <div className="card bg-dark text-white border-light">
        <div className="card-body">
          <h4 className="card-title">High School</h4>
          <h6 className="card-subtitle mb-2 ">Graduated: June 2024</h6>
          <p className="card-text">
            Completed A Levels with the following subjects and results:
            <ul>
              <li>Mathematics – A*</li>
              <li>Physics – A</li>
              <li>Chemistry – A</li>
              <li>Further Mathematics – B</li>
            </ul>
            Awarded a full scholarship in my final year.
          </p>
        </div>
      </div>
    </div>
  );
}
