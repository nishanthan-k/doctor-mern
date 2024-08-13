import axios from "axios";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
  baseURL: `http:192.168.1.42:8080`,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
  timeout: 10000,
});

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const resp = await axiosInstance.get("/api/doctor/list")

      if (resp.status >= 200) {
        const { list } = resp.data;
        console.log(list)
        setDoctors(list);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => fetchDoctors() , [])
  return (
    <div>
      {
        doctors.map((ele) => (
          <p key={ele.id}>{ele.name}</p>
        ))
      }
    </div>
  )
}
