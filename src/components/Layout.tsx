import { produce } from 'immer';
import { useState } from 'react'
import AddData from './AddData';
import DataTable, { Data } from './DataTable';
import SearchData from './SearchData';


interface SubmittedData {
    name: string;
    email: string;
    body: string;
}

const Layout = () => {
    const [data, setData] = useState<Data[] | []>([]);
    const [filteredData, setFilteredData] = useState<Data[] | []>([])

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
            <div className=' h-fit bg-[#f4a261] px-12 vsm:px-3 py-10'>
                <div>
                    <SearchData onSearch={handleSearch} />
                    <AddData onSubmit={handleAddData} />
                </div>

                <DataTable updatedData={filteredData.length > 0 ? filteredData : data}
                    onUpdate={(fetched) => setData(fetched)}
                    onDelete={handleDelete} />


            </div>

        </>
    )
}

export default Layout