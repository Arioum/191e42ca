import { useEffect, useState, useCallback } from 'react';
import JobFilterContainer from '../layouts/JobFilterContainer/JobFilterContainer';
import JobCardContainer from '../layouts/JobCardContainer/JobCardContainer';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchJdList = useCallback(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      limit: 10,
      offset: (page - 1) * 10, // Calculate offset based on current page
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    setLoading(true); // Set loading state to true
    fetch(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setJobs((prevJobs) => [...prevJobs, ...data.jdList]); // Append new jobs to existing list
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); // Set loading state to false after fetching
  }, [page]);

  useEffect(() => {
    fetchJdList();
  }, [fetchJdList]);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight } = document.documentElement;

      if (scrollTop + window.innerHeight + 1 >= scrollHeight) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='container'>
      <h4>Search Jobs</h4>
      <JobFilterContainer />
      <JobCardContainer jobListings={jobs} />
      {loading && <p className='loading'>Loading...</p>}
    </main>
  );
};

export default Jobs;
