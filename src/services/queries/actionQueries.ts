import { useQuery } from "@tanstack/react-query";
import useApi from "@/hooks/useApi";
import { type ActionI } from "@/types/api";

const useActions = () => {
  const api = useApi();

  return useQuery({
    queryKey: ["actions"],
    queryFn: async () => {
      const { data } = await api.get<ActionI[]>("api/actions/");
      return data;
    },
  });
};

export default useActions;