import { useState } from 'react';
import './styles.css';

const JobFilterContainer = () => {
  const [roles, setRoles] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [remote, setRemote] = useState('');
  const [basePay, setBasePay] = useState('');

  return (
    <section className='job-filter-container'>
      <input
        type='text'
        onChange={(e) => setRoles(e.target.value)}
        value={roles}
        placeholder='Roles'
      />
      <input
        type='text'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        placeholder='Location'
      />
      <input
        type='number'
        onChange={(e) => setExperience(e.target.value)}
        value={experience}
        placeholder='Experience'
      />
      <input
        type='text'
        onChange={(e) => setRemote(e.target.value)}
        value={remote}
        placeholder='Remote'
      />
      <input
        type='number'
        onChange={(e) => setBasePay(e.target.value)}
        value={basePay}
        placeholder='Minimum Base Pay'
      />
    </section>
  );
};

export default JobFilterContainer;
