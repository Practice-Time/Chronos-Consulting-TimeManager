import axios from "axios";

export interface ApiResponse {
  "F 14/10/2022 AM": string;
  "F 14/10/2022 PM": string;
  "F 21/10/2022 AM": string;
  "F 21/10/2022 PM": string;
  "F 28/10/2022 AM": string;
  "F 28/10/2022 PM": string;
  "M 17/10/2022 AM": string;
  "M 17/10/2022 PM": string;
  "M 24/10/2022 AM": string;
  "M 24/10/2022 PM": string;
  "M 31/10/2022 AM": string;
  "M 31/10/2022 PM": string;
  Name: string;
  "T 13/10/2022 AM": string;
  "T 13/10/2022 PM": string;
  "T 18/10/2022 AM": string;
  "T 18/10/2022 PM": string;
  "T 20/10/2022 AM": string;
  "T 20/10/2022 PM": string;
  "T 25/10/2022 AM": string;
  "T 25/10/2022 PM": string;
  "T 27/10/2022 AM": string;
  "T 27/10/2022 PM": string;
  "W 12/10/2022 AM": string;
  "W 12/10/2022 PM": string;
  "W 19/10/2022 AM": string;
  "W 19/10/2022 PM": string;
  "W 26/10/2022 AM": string;
  "W 26/10/2022 PM": string;
}

const api = axios.create({
  headers: {
    "x-api-key": "back2base",
  },
});

export const getConsultantSchedule = async () => {
  return await api.post<ApiResponse>(
    "https://prod-187.westus.logic.azure.com/workflows/66c8ebdb631d4fdb9d09d81e5faf2b78/triggers/manual/paths/invoke",
    { Practice: "cloud apps & integration", CurrentMonth: false }
  );
};
