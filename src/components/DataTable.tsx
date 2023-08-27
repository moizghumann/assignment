
export interface Data {
    id: number;
    name: string;
    email: string;
    body: string
}

interface DataProps {
    updatedData: Data[];
    onDelete: (id: number) => void;
}

const DataTable = ({ updatedData, onDelete }: DataProps) => {
    // had to provide an empty array as dependency here since using the updatedData causes a re-render and deleted entry is replaced again from the api endpoint fetch (since deletion doesnt actually delete an entry from the jsonplaceholder data and only manipulates the entries on local session)

    return (
        <div className="relative overflow-x-auto shadow-2xl sm:rounded-3xl vsm:rounded-2xl mt-28 border-4 border-[#264653]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300 md:text-opacity-80 vsm:text-opacity-80 table-auto">
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
                        <th scope="col" className="px-6 py-3 pl-2">
                            <span>
                                Action
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {updatedData?.map(eachItem =>
                        <tr key={eachItem.id} className="bg-[#264653] border-b text-base">
                            <td className="px-6 py-4 whitespace-pre-wrap">{eachItem.id}</td>
                            <td className="px-6 py-4 whitespace-pre-wrap">{eachItem.name}</td>
                            <td className="px-6 py-4 whitespace-pre-wrap">{eachItem.email}</td>
                            <td className="px-6 py-4 whitespace-pre">{eachItem.body}</td>
                            <td><button onClick={() => { onDelete(eachItem.id) }}
                                className=" inline-block rounded-2xl bg-[#e9c46a] px-4 py-2 text-base font-medium text-[#264653] hover:border-2 hover:border-[#264653] border-[3px] border-[#264653] transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-5"
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