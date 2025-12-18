import { useQuery } from "@tanstack/react-query"
import { getLatestPosts } from "../../../services/postServices"

 export const useGetLatestPosts = () => {

    return useQuery({
        queryKey:["latestPosts"],
        queryFn:getLatestPosts
    })
  
}

