import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import './styles.css';

const JobCardContainer = ({ jobListings }) => {
  const { roles, location, experience, remote, basePay } = useSelector(
    (state) => state.filters
  );

  const filteredJobListings = useCallback(() => {
    return jobListings.filter((jd) => {
      if (roles && roles.length > 0 && !roles.includes(jd.jobRole)) {
        return false;
      }

      if (location && location.length > 0 && !location.includes(jd.location)) {
        return false;
      }

      if (
        experience &&
        experience.length > 0 &&
        !experience.includes(jd.minExp)
      ) {
        return false;
      }

      if (remote && !jd.remote) {
        return false;
      }

      if (basePay && (jd.basePay < basePay.min || jd.basePay > basePay.max)) {
        return false;
      }
      return true;
    });
  }, [jobListings, roles, location, experience, remote, basePay]);

  useEffect(() => {
    filteredJobListings();
  }, [filteredJobListings]);

  return (
    <section className='job-card-container'>
      {filteredJobListings().map((jd, index) => (
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
