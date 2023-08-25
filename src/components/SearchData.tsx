import React from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchData = ({ onSearch }: SearchProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className='  w-full'>
            <input
                className=' border-[3px] border-[#264653] w-full h-full py-5 mb-12 rounded-3xl pl-3 bg-[#f4a261] text-[#264653] placeholder:italic placeholder:text-[#264653] placeholder:text-lg placeholder:font-semibold placeholder:opacity-80 focus:outline-none'
                onChange={handleInputChange}
                placeholder='Search for name..'
            />
        </div>
    );
};

export default SearchData;
