import { useQuery } from "react-query";
import axios from "axios";

const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    return res.data;
}

const useData = () => {
    return useQuery({
        queryKey: ['comments'],
        queryFn: fetchData
    })
}

export default useData;