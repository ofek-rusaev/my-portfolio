import React from 'react';
import Resume from '../documents/Ofek Rusaev - CV.pdf';

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <section className="section-title">
                <h2 >EXPERIENCE</h2>
                <p>What I did so far.</p>
                <p>Next stop - 100% Developer!</p>
            </section>
            <h3>2015 – 2019: Maai capital - crypto exchange and trading platform provider company:</h3>
            <h4>Back office and operation manager (position of trust)</h4>
            <ul>
                <li>Managing the back office team which is responsible for supporting sales, while collaborating with all departments of the company</li>
                <li>Creating and implementing complex excel reports based on aggregated data from multiple systems (CRM, Sirix, MT4, Praxis), e.g. P&L for customers’ accounts and affiliate reports</li>
                <li>Tracking and calculating sales commissions and bonuses of company’s employees</li>
                <li>Improving working procedures between departments</li>
                <li>Project management of new platforms and products</li>
                <li>QA for new websites and products</li>
                <li>Maintaining website content using Wordpress</li>
            </ul>

            <h4>Back office manager (relocation to SA)</h4>
            <ul>
                <li>Establishment of Back Office department in the company’s branch in SA</li>
                <li>Direct manager of team of 4 employees</li>
                <li>Building work structures and procedures</li>
                <li>All duties of this department seen in points below</li>
            </ul>
            <h4>Back office </h4>
            <ul>
                <li>Direct communication with all departments to assist the front office to work fluently</li>
                <li>Assistance to managers with performance management reviews using KPI’s reports</li>
                <li>Monitoring risk, reviewing service providers to company client database and processing projects</li>
                <li>Handling accounting and finance tasks</li>
            </ul>
            <div className="download">
                <a href={Resume} download className="download-cv">DOWNLOAD RESUME</a>
                {/* <a href={Resume} download className="download-cv">Download Resume</a> */}
            </div>

            {/* <h3>2010 – 2014	Travel and work abroad</h3> */}
            {/* <h3>2006 – 2008	Full service at “Shalishut” in IDF</h3> */}
            <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </div>
    );
}

export default Experience;