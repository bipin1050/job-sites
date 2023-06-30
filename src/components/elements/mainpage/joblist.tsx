import React from "react";
import { JobsParam } from "../../../data/useFetch";

type JoblistProps = {
  jobs: JobsParam[];
};

const DateDisplay = ({date}: {date:number}) => {

    const postedDate = new Date(date);
    const currentDate = new Date();
  

  // Calculate the time difference in milliseconds
  const timeDiff = Math.floor((currentDate.getTime() - postedDate.getTime())/(1000 * 3600 * 24));

    return (
        <>
        {timeDiff}
        </>
    );
}

const Joblist = ({ jobs }: JoblistProps) => {
  return (
    <div className="pt-16">
      {jobs.length ? (
        jobs.map((job, id) => (
          <div key={id} className="w-[80%] mx-auto px-4 grid grid-cols-6 gap-4">
            <div>
              <img
                src={job.company_logo}
                height={60}
                width={60}
                className="rounded-full"
              />
            </div>
            <div className="col-span-2">
              <div>{job.company}</div>
              <div>{job.position}</div>
              <div>
                <div>
                  <DateDisplay date={job.posted_on} />d ago
                </div>
                <div>{job.timing}</div>
                <div>{job.location}</div>
              </div>
            </div>
            <div className="col-span-3">
              {job.keywords.map((keyword, id) => {
                return <div key={id}>{keyword}</div>;
              })}
            </div>
          </div>
        ))
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default Joblist;
