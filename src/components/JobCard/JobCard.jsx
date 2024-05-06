import { useState } from 'react';
import './styles.css';

const JobCard = ({
  postedOn,
  title,
  companyName,
  logoUrl,
  minSalary,
  maxSalary,
  description,
  location,
  experience,
  applyLink,
}) => {
  const [expandDescription, setExpandDescription] = useState(false);
  const salaryRange = minSalary && maxSalary ? true : false;

  return (
    <article className='job-card'>
      <div className='job-details'>
        <div className='job-post-age'>
          <span>⏳ Posted {postedOn} days ago</span>
        </div>
        <div className='job-details-top'>
          <img src={logoUrl} />
          <div>
            <a href='/' className='company-name'>
              {companyName}
            </a>
            <p className='job-title'>{title}</p>
            <p className='job-location'>{location}</p>
          </div>
        </div>
        <div className='est-salary'>
          <span>
            Estimated Salary: ₹{minSalary && `${minSalary}`}
            {salaryRange && ' - '}
            {maxSalary && `${maxSalary}`} LPA ✅
          </span>
        </div>
        <div className='job-details-bottom'>
          <p className='about-company'>About Company:</p>
          <p className='job-description'>
            {!expandDescription
              ? `${description.substring(0, 560)}...`
              : description}
          </p>
          <span
            className={`show-desc ${expandDescription && 'desc-expanded'}`}
            onClick={() => setExpandDescription(!expandDescription)}
          >
            {expandDescription ? 'Show less' : 'Show more'}
          </span>
        </div>
        <div className='job-experience'>
          <h3>Minimum Experience</h3>
          <p>{experience ? `${experience} years` : 'Not listed'}</p>
        </div>
      </div>
      <a href={applyLink} className='apply-link'>
        ⚡ Easy Apply
      </a>
    </article>
  );
};

export default JobCard;
