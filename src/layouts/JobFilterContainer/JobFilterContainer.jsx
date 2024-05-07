import { useSelector, useDispatch } from 'react-redux';
import {
  updateBasePay,
  updateExperience,
  updateLocation,
  updateRemote,
  updateRoles,
  updateCompanyName,
} from '../../redux/slices/filters';
import InputField from '../../components/InputField/InputField';
import './styles.css';

const JobFilterContainer = () => {
  const { roles, location, experience, remote, basePay, companyName } =
    useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <section className='job-filter-container'>
      <InputField
        options={['frontend', 'backend', 'tech lead', 'ios', 'andriod']}
        filterState={roles}
        setFilterState={(roles) => dispatch(updateRoles(roles))}
        placeholder='Roles'
      />
      <InputField
        options={['chennai', 'delhi ncr', 'mumbai', 'remote', 'bangalore']}
        filterState={location}
        setFilterState={(locations) => dispatch(updateLocation(locations))}
        placeholder='Location'
      />
      <InputField
        options={Array.from({ length: 10 }, (_, index) =>
          (index + 1).toString()
        )}
        selectionLimit={1}
        filterState={experience}
        setFilterState={(experience) => dispatch(updateExperience(experience))}
        placeholder='Experience'
      />
      <InputField
        options={['Remote', 'Hybrid', 'In-office']}
        filterState={remote}
        setFilterState={(remote) => dispatch(updateRemote(remote))}
        placeholder='Remote'
      />
      <InputField
        options={Array.from({ length: 8 }, (_, index) => index * 10)}
        selectionLimit={1}
        width={'140px'}
        filterState={basePay}
        setFilterState={(basePay) => dispatch(updateBasePay(basePay))}
        placeholder='Minimum Base Pay'
      />
      <InputField
        width={'160px'}
        filterState={companyName}
        setFilterState={(companyName) =>
          dispatch(updateCompanyName(companyName))
        }
        placeholder='Search Company Name'
      />
    </section>
  );
};

export default JobFilterContainer;
