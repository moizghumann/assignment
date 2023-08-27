import { produce } from 'immer';
import { useEffect, useState } from 'react'
import AddData from './AddData';
import DataTable from './DataTable';
import SearchData from './SearchData';
import useData from '../hooks/useData';
import LoadingIndicator from './LoadingIndicator';
import { SubmittedData } from '../entities/SubmittedData';
import { Data } from '../entities/Data';


const Layout = () => {

    const { data: fetchedData, isFetching, status } = useData();

    const [data, setData] = useState<Data[] | []>([]);
    const [filteredData, setFilteredData] = useState<Data[] | []>([])

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
                <LoadingIndicator />
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