// import axios from "axios";
// import { useCallback } from "react";

// function useFetch() {
//   const fetchData = useCallback(async ({ method, url, data, params }) => {
//     try {
//       // Correct token key retrieval
//       const token = sessionStorage.getItem("token");
//       const id = sessionStorage.getItem("companyId");

//       const axiosConfig = {
//         method,
//         url,
//         ...(data && { data }),
//         ...(params && { params }),
//         headers: {
//           Authorization: `Bearer ${token}`,
//           companyid: `${id}`,
//         },
//       };

//       const result = await axios(axiosConfig);
//       return result.data;
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.error(
//         `Error fetching data from ${url}:`,
//         error.message,
//         error.stack
//       );
//       throw error; // Rethrow the error to propagate it
//     }
//   }, []);

//   return [fetchData];
// }

// export default useFetch;
