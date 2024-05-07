import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard/JobCard';
import './styles.css';

const JobCardContainer = ({ jobListings }) => {
  const { roles, location, experience, remote, basePay, companyName } =
    useSelector((state) => state.filters);

  const filteredJobListings = useCallback(() => {
    return jobListings.filter((jd) => {
      const minExp = jd.minExp ? jd.minExp.toString() : jd.minExp;
      console.log(jd.minJdSalary, basePay);
      // Check if job role matches
      if (
        roles &&
        roles.length > 0 &&
        !roles.find((role) => role === jd.jobRole)
      ) {
        return false;
      }
      // Check if location matches
      if (location && location.length > 0 && !location.includes(jd.location)) {
        return false;
      }
      // Check if experience matches
      if (experience && experience.length > 0 && !experience.includes(minExp)) {
        return false;
      }
      // Check if remote matches
      if (remote && remote.length > 0 && !remote.includes(jd.remote)) {
        return false;
      }
      // Check if basePay is within range
      if (basePay && jd.minJdSalary < Number(basePay)) {
        return false;
      }
      // Check company name
      if (
        companyName &&
        companyName.length > 0 &&
        !jd.companyName.includes(companyName)
      ) {
        return false;
      }
      return true;
    });
  }, [jobListings, roles, location, experience, remote, basePay, companyName]);

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
