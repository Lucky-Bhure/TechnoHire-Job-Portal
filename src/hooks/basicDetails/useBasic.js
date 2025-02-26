import conf from "../../config";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { toast } from "react-toastify";

function useBasic() {
    const [fetchData] = useFetch();
    const [loading, setLoading] = useState(false);

    const basicDetails = async (userdata) => {
        setLoading(true);
        try {
            const res = await fetchData({
                method: "POST",
                url: `${conf.apiBaseUrl}basic/info`,
                data: userdata,
            });
            if (res) {
                console.log("Basic details posted");
                toast.success(res?.message || "Basic Details Added");
            } else {
                throw new Error(res?.message || "Failed to add basic details");
            }
        } catch (error) {
            console.error("Error posting basic details:", error);
            toast.error(error.response?.data?.error || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return { basicDetails, loading }; // Added loading if needed
}

export default useBasic;
