import axios from "axios";
import React, { useEffect, useState } from "react";


const URL =
  "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";


export type JobsParam = {
    position : string
    timing : string
    location: string
    keywords: string[]
    company: string
    company_logo: string
    posted_on: number
}

const useFetch = (searchfields: string[]) => {
  const [jobs, setJobs] = useState<JobsParam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // console.log(res);
        setJobs(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);
  
  return { jobs, isLoading, error };
};

export default useFetch;
