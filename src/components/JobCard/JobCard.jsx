import { useState } from 'react';
import './styles.css';

const JobCard = ({
  title,
  companyName,
  logoUrl,
  description,
  location,
  experience,
  applyLink,
}) => {
  const [expandDescription, setExpandDescription] = useState(false);

  return (
    <article className='job-card'>
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
      <div className='job-details-bottom'>
        <p className='about-company'>About Company:</p>
        <p className='job-description'>
          {!expandDescription
            ? `${description.substring(0, 320)}...`
            : description}
        </p>
        <span onClick={() => setExpandDescription(!expandDescription)}>
          expand
        </span>
        <p>{experience}</p>
      </div>
      <a href={applyLink} className='apply-link'>
        ⚡ Easy Apply
      </a>
    </article>
  );
};

export default JobCard;
