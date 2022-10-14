import { useState, useEffect } from "react";
import { ApiResponse, getConsultantSchedule } from "../Services/Api";

const TestPage = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    return await getConsultantSchedule()
      .then((response) => setData(response.data))
      .finally(() => setLoading(false));
  };
  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && <p>{JSON.stringify(data)}</p>}
    </>
  );
};

export default TestPage;
