import { produce } from 'immer';
import { useEffect, useState } from 'react'
import AddData from './AddData';
import DataTable, { Data } from './DataTable';
import SearchData from './SearchData';
import useData from '../hooks/useData';


interface SubmittedData {
    name: string;
    email: string;
    body: string;
}

const Layout = () => {

    const { data: fetchedData, isFetching, status, error } = useData();

    const [data, setData] = useState<Data[] | []>([]);
    const [filteredData, setFilteredData] = useState<Data[] | []>([])
    if (error) {
        console.log(error)
    }

    console.log(fetchedData);

    useEffect(() => {
        if (status === 'success') {
            setData(fetchedData);
        }
    }, [fetchedData, status]);

    // handling the newly added info and updating the state
    const handleAddData = (newData: SubmittedData) => {
        const currentMaxId = Math.max(...data.map(item => item.id || 0), 0);
        const incrementedId = currentMaxId + 1;

        const newDataWithId: Data = { ...newData, id: incrementedId };
        setData([...data, newDataWithId]);
    };

    // handling the deletion of info (using immer for immutability)
    const handleDelete = (theID: number) => {
        setData(produce(draft => {
            const index = draft.findIndex(eachInfo => eachInfo.id === theID);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        })
        );
    }

    // handling the search functionality
    const handleSearch = (query: string) => {
        const filtered = data.filter(item => item.name?.toLowerCase().includes(query.toLowerCase()));
        setFilteredData(filtered)
    }

    return (
        <>
            {isFetching ?
                <div className=' h-screen bg-[#f6bd60] grid place-items-center text-5xl italic font-bold text-[#264653]'>
                    Loading..
                </div>
                : status === 'success' &&
                <div className=' h-fit bg-[#f6bd60] vsm:px-5 md:px-12 md:py-10 vsm:py-5'>
                    <div>
                        <SearchData onSearch={handleSearch} />
                        <AddData onSubmit={handleAddData} />
                    </div>

                    <DataTable updatedData={filteredData.length > 0 ? filteredData : data}
                        onDelete={handleDelete}
                    />
                </div>}
        </>
    )
}

export default Layout