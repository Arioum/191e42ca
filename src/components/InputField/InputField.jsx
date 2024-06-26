import { useState, useRef } from 'react';
import './styles.css';

const InputField = ({
  options,
  width,
  filterState,
  setFilterState,
  selectionLimit,
  placeholder,
}) => {
  const [chips, setChips] = useState(filterState);
  const [inputValue, setInputValue] = useState('');
  const [availableOptions, setAvailableOptions] = useState(options);
  const [isActive, setIsActive] = useState(false);

  const blurTimeoutRef = useRef(null);
  const inputRef = useRef(null);
  // console.log('chips', chips);

  const checkSelectionLimit = selectionLimit
    ? selectionLimit === chips.length
    : null;

  const handleOptionClick = (option) => {
    setChips([...chips, option]);
    setFilterState(option);
    setInputValue('');
    inputRef.current.focus();
    handleBlur(false);

    // Remove selected option from availableOptions array
    setAvailableOptions((prevOptions) =>
      prevOptions.filter((item) => item !== option)
    );
  };

  const removeChip = (chipToRemove) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToRemove));
    setAvailableOptions((prevOptions) => [...prevOptions, chipToRemove]);
    setFilterState(null)
    // setFilterState(filterState.filter((chip) => chip !== chipToRemove));
  };

  const addOrRemoveChipByKey = (e) => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();
      if (availableOptions.includes(inputValue)) {
        setChips([...chips, inputValue]);
        // Remove selected option from availableOptions array
        setAvailableOptions((prevOptions) =>
          prevOptions.filter((item) => item !== inputValue)
        );
        // Dispatch event: updateState
        setFilterState(inputValue);
        handleBlur(false);
        setInputValue('');
      }
    }

    if (e.key === 'Backspace' && inputValue.length === 0) {
      if (chips.length > 0) {
        const lastChip = chips[chips.length - 1];
        removeChip(lastChip);
      }
    }
  };

  const filterAvailableOptions = (value) => {
    setInputValue(value);

    setAvailableOptions((prevOptions) =>
      prevOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleFocus = () => {
    clearTimeout(blurTimeoutRef.current);
    setIsActive(true);
  };

  const handleBlur = () => {
    // Using setTimeout to delay setting isActive to false
    // This ensures option selection occurs before closing dropdown
    blurTimeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 200); // Adjust the delay as needed
  };
  if (!options) {
    return (
      <div className='autocomplete'>
        <input
          type='text'
          className='input-field'
          style={{ minWidth: width }}
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
          placeholder='Search Company Name'
        />
      </div>
    );
  }

  return (
    <div
      className={`autocomplete ${isActive ? 'focus-active' : ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className='chips-container'>
        {chips.map((chip, index) => (
          <div className='chip' key={index}>
            <span>{chip}</span>
            <svg
              onClick={() => removeChip(chip)}
              height='10'
              width='10'
              viewBox='0 0 20 20'
              aria-hidden='true'
              focusable='false'
              className='css-8mmkcg'
            >
              <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
            </svg>
          </div>
        ))}
      </div>
      {!checkSelectionLimit && (
        <input
          type='text'
          className='input-field'
          onClick={handleFocus}
          style={{ minWidth: width }}
          onChange={(e) => filterAvailableOptions(e.target.value)}
          onKeyDown={addOrRemoveChipByKey}
          value={inputValue}
          placeholder={placeholder}
          ref={inputRef}
        />
      )}
      <div className='input-dropdown'>
        {chips.length > 0 && (
          <div className='remove-all-chips'>
            <svg
              onClick={() => {
                setChips([]);
                setAvailableOptions(options);
              }}
              height='10'
              width='10'
              viewBox='0 0 20 20'
              aria-hidden='true'
              focusable='false'
              className='css-8mmkcg'
            >
              <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
            </svg>
          </div>
        )}
        <hr className='input-separator'></hr>
        <svg
          height='20'
          width='20'
          viewBox='0 0 20 20'
          aria-hidden='true'
          focusable='false'
          className='css-8mmkcg'
        >
          <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
        </svg>
      </div>
      {isActive && !checkSelectionLimit ? (
        <div className='auto-options'>
          {availableOptions?.map((option, index) => (
            <span
              key={index}
              className='option'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </span>
          ))}
          {availableOptions.length === 0 && (
            <span className='option'>No Options</span>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputField;
