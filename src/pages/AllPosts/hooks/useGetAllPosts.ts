import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/postServices";

 export const useGetAllPosts = (page:number) => {
  return useQuery({
    queryKey: ["allPosts" ,page],
    queryFn: ()=>getAllPosts(page),
  });
};

