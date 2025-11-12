import api from "@/lib/axios";

const fetchActions = async () => {
    const { data } = await api.get("/api/actions/");
    return data;
}