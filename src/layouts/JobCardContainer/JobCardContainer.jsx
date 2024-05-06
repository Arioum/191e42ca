import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import './styles.css';

const JobCardContainer = ({ jobListings }) => {
  const { newRoles, location, experience, remote, basePay } = useSelector(
    (state) => state.filters
  );
  // console.log('newRoles', newRoles);

  const filteredJobListings = useCallback(() => {
    return jobListings.filter((jd) => {
      // Check if job role matches
      if (
        newRoles &&
        newRoles.length > 0 &&
        !newRoles.find((role) => role === jd.jobRole)
      ) {
        return false;
      }
      // Check if location matches
      if (location && location.length > 0 && !location.includes(jd.location)) {
        return false;
      }
      // Check if experience matches
      if (
        experience &&
        experience.length > 0 &&
        !experience.includes(jd.minExp)
      ) {
        return false;
      }
      // Check if remote matches
      if (remote && !jd.remote) {
        return false;
      }
      // Check if basePay is within range
      if (basePay && (jd.basePay < basePay.min || jd.basePay > basePay.max)) {
        return false;
      }
      return true;
    });
  }, [jobListings, newRoles, location, experience, remote, basePay]);

  useEffect(() => {
    filteredJobListings();
  }, [filteredJobListings]);

  return (
    <section className='job-card-container'>
      {filteredJobListings().map((jd, index) => (
        <JobCard
          key={index}
          postedOn={Math.floor(Math.random() * 20) + 1}
          title={jd.jobRole}
          companyName={jd.companyName}
          logoUrl={jd.logoUrl}
          minSalary={jd.minJdSalary}
          maxSalary={jd.maxJdSalary}
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
