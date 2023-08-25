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
        <div className="relative overflow-x-auto shadow-2xl sm:rounded-2xl mt-28">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-[#fefae0] uppercase bg-[#2a9d8f] font-bold text-xl">
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
                        <tr key={eachItem.id} className="bg-[#264653] border-b text-base">
                            <td className="px-6 py-4">{eachItem.id}</td>
                            <td className="px-6 py-4">{eachItem.name}</td>
                            <td className="px-6 py-4">{eachItem.email}</td>
                            <td className="px-6 py-4">{eachItem.body}</td>
                            <td><button onClick={() => { onDelete(eachItem.id) }}
                                className="inline-block rounded-2xl bg-[#e9c46a] px-4 py-2 text-base font-medium text-[#264653] hover:border-2 hover:border-[#264653] border-[3px] border-[#264653] transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-5"
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