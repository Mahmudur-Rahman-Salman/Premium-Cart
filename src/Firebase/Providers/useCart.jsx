import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const useCart = () => {
    const axiosSecure = UseAxiosSecure(); 
   const {data: cart= []} = useQuery({
    queryKey: ["cart"],
    queryFn : async () => {
        const res = await axiosSecure.get("/carts"); 
        const result = res.data; 
        return result; 
    }
   })
   return [cart]; 
};

export default useCart;