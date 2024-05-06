import { useSelector, useDispatch } from 'react-redux';
import {
  updateBasePay,
  updateExperience,
  updateLocation,
  updateRemote,
  updateRoles,
} from '../../redux/slices/filters';
import InputField from '../../components/InputField/InputField';
import './styles.css';

const JobFilterContainer = () => {
  const { experience, remote, basePay } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <section className='job-filter-container'>
      <InputField
        options={['frontend', 'backend', 'tech lead', 'ios', 'andriod']}
        onRolesChange={(roles) => dispatch(updateRoles(roles))}
        placeholder='Roles'
      />
      {/* <input
        type='text'
        onChange={(e) => dispatch(updateRoles(e.target.value))}
        value={roles}
        placeholder='Roles'
      /> */}
      <InputField
        options={['chennai', 'delhi ncr', 'mumbai', 'remote', 'bangalore']}
        onRolesChange={(locations) => dispatch(updateLocation(locations))}
        placeholder='Location'
      />
      <InputField
        options={Array.from(
          { length: (10 - 1) / 1 + 1 },
          (value, index) => 1 + index * 1
        )}
        selectionLimit={1}
        onRolesChange={(locations) => dispatch(updateExperience(locations))}
        placeholder='Experience'
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
