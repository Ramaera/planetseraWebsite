import axios from "axios";
import { Get_BUYER } from "@/apollo/queries";
import { useQuery } from "@apollo/client";

const API_BASE_URL = "https://nvg1b95j-6770.inc1.devtunnels.ms/graphql";

export const fetchData = async () => {
  const { data: userServerData } = useQuery(Get_BUYER);

  try {
    const { refetch } = userServerData;
    const data = await refetch();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
