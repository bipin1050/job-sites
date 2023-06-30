import useFetch from "../../../data/useFetch";
import Joblist from "./jobList";

type DisplayJobsProps = {
  searchfields: string[];
};

const DisplayJobs = ({ searchfields }: DisplayJobsProps) => {
    const {jobs, isLoading, error} = useFetch(searchfields); 
    // console.log(jobs)

      const filteredJobs = jobs.filter((job) => {
        // Check if the job contains all the words in the searchfields
        return searchfields.every(
          (field) =>
            job.position.toLowerCase().includes(field.toLowerCase()) ||
            job.timing.toLowerCase().includes(field.toLowerCase()) ||
            job.location.toLowerCase().includes(field.toLowerCase()) ||
            job.keywords.some((keyword) =>
              keyword.toLowerCase().includes(field.toLowerCase())
            ) ||
            job.company.toLowerCase().includes(field.toLowerCase())
        );
      });

    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }
    else if(error?.length){
        console.log(error)
        return(
            <div>Error Fetching the Jobs</div>
        )
    }
  return (
    <div>
      {searchfields.length
        ? <Joblist jobs={filteredJobs}/>
        : <Joblist jobs={jobs}/>
      }
    </div>
  );
};

export default DisplayJobs;
