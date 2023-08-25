import { useEffect } from 'react';

export interface Data {
    id: number;
    name?: string;
    email?: string;
    body?: string
}

interface DataProps {
    updatedData: Data[];
    onUpdate: (data: Data[]) => void;
    onDelete: (id: number) => void;
}

const DataTable = ({ onUpdate, updatedData, onDelete }: DataProps) => {

    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    // had to provide an empty array as dependency here since using the updatedData causes a re-render and deleted entry is replaced again from the api endpoint fetch (since deletion doesnt actually delete an entry from the jsonplaceholder data and only manipulates the entries on local session)
    useEffect(() => {
        fetchData().then((fetchedData) => {
            onUpdate(fetchedData);
        });
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[#f4a261] dark:bg-[#f4a261]dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Body
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {updatedData.map(eachItem =>
                        <tr key={eachItem.id} className="bg-white border-b dark:bg-[#e76f51]
                        dark:border-gray-700 hover:bg-[#e9c46a] dark:hover:bg-[#e9c46a]">
                            <td className="px-6 py-4">{eachItem.id}</td>
                            <td className="px-6 py-4">{eachItem.name}</td>
                            <td className="px-6 py-4">{eachItem.email}</td>
                            <td className="px-6 py-4">{eachItem.body}</td>
                            <td><button onClick={() => { onDelete(eachItem.id) }}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >

    )
}

export default DataTable