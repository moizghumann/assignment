import React from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchData = ({ onSearch }: SearchProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className='flex justify-start items-center gap-4'>
            <h4 className='text-lg text-white'>Search</h4>
            <input
                className='border-2 rounded-lg w-48 h-fit text-white'
                onChange={handleInputChange}
                placeholder='Search for name'
            />
        </div>
    );
};

export default SearchData;
