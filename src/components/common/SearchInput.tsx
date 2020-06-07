import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInputAction } from '../../store/actions/searchActions';
import { AppStateType } from '../../types/AppStateType';

const SearchInput = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector((state: AppStateType) => state.search);
  const [searchInput, setSearchInput] = useState(currentValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const val: string = target.value as string;
    setSearchInput(val);
  };

  useEffect(() => {
    const cs: NodeJS.Timeout = setTimeout(() => {
      if (searchInput !== currentValue)
        dispatch(setSearchInputAction(searchInput));
    }, 1000);

    return () => clearTimeout(cs);
  }, [dispatch, searchInput]);

  return (
    <div className="search-container">
      <input
        value={searchInput}
        type="text"
        placeholder="SearchType..."
        className="search-input"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
