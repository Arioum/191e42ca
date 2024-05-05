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
      <div className='job-company'>
        <img src={logoUrl} />
        <div className=''>
          <p>{companyName}</p>
          <p>{title}</p>
          <p>{location}</p>
        </div>
      </div>
      <p>{!expandDescription ? `${description.substring(0, 320)}...` : description}</p>
      <span onClick={() => setExpandDescription(!expandDescription)}>
        expand
      </span>
      <p>{experience}</p>
      <a href={applyLink} className='apply-link'>
        ⚡ Easy Apply
      </a>
    </article>
  );
};

export default JobCard;
