import { useSelector, useDispatch } from 'react-redux';
import {
  updateBasePay,
  updateExperience,
  updateLocation,
  updateRemote,
  updateRoles,
} from '../../redux/slices/filters';
import './styles.css';

const JobFilterContainer = () => {
  const { roles, location, experience, remote, basePay } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  return (
    <section className='job-filter-container'>
      <input
        type='text'
        onChange={(e) => dispatch(updateRoles(e.target.value))}
        value={roles}
        placeholder='Roles'
      />
      <input
        type='text'
        onChange={(e) => dispatch(updateLocation(e.target.value))}
        value={location}
        placeholder='Location'
      />
      <input
        type='number'
        onChange={(e) => dispatch(updateExperience(e.target.value))}
        value={experience}
        placeholder='Experience'
      />
      <input
        type='text'
        onChange={(e) => dispatch(updateRemote(e.target.value))}
        value={remote}
        placeholder='Remote'
      />
      <input
        type='number'
        onChange={(e) => dispatch(updateBasePay(e.target.value))}
        value={basePay}
        placeholder='Minimum Base Pay'
      />
    </section>
  );
};

export default JobFilterContainer;
