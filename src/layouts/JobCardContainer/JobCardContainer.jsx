import JobCard from '../../components/JobCard/JobCard';
import './styles.css';

const JobCardContainer = ({ jobListings }) => {
  return (
    <section className='job-card-container'>
      {jobListings.map((jd, index) => (
        <JobCard
          key={index}
          title={jd.jobRole}
          companyName={jd.companyName}
          logoUrl={jd.logoUrl}
          description={jd.jobDetailsFromCompany}
          location={jd.location}
          experience={jd.minExp}
          applyLink={jd.jdLink}
        />
      ))}
    </section>
  );
};

export default JobCardContainer;
