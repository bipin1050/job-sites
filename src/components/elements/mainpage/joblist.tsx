import React from "react";
import { JobsParam } from "../../../data/useFetch";

type JoblistProps = {
  jobs: JobsParam[];
};

const DateDisplay = ({ date }: { date: number }) => {
  const postedDate = new Date(date);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = Math.floor(
    (currentDate.getTime() - postedDate.getTime()) / (1000 * 3600 * 24)
  );

  return <>{timeDiff}d ago</>;
};

const Joblist = ({ jobs }: JoblistProps) => {
  return (
    <div className="pt-16">
      {jobs.length ? (
        jobs.map((job, id) => (
          <div
            key={id}
            className="w-[70%] mx-auto px-4 grid grid-cols-11 gap-4 items-center my-3 py-3 shadow-md rounded-md border-l-4 border-transparent hover:border-[#64babb]">
            <div className="col-span-2">
              <div className="flex justify-center">
                <img
                  src={job.company_logo}
                  height={70}
                  width={70}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col justify-start h-full">
                <div className="text-[#64babb] font-semibold text-sm">
                  {job.company}
                </div>
                <div className="hover:text-[#64babb] hover:cursor-pointer font-bold my-1">
                  {job.position}
                </div>
                <div className="flex justify-between text-xs text-[#babcbc] font-semibold">
                  <div>
                    <DateDisplay date={job.posted_on} />
                  </div>
                  <div>{job.timing}</div>
                  <div>{job.location}</div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex justify-end ">
                {job.keywords.map((keyword, id) => {
                  return (
                    <div
                      key={id}
                      className="bg-[#e3f5f5] rounded-sm font-bold text-xs text-[#64babb] hover:text-[#fff] hover:bg-[#64babb] hover:cursor-pointer py-1 px-2 mx-3">
                      {keyword}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[70%] mx-auto p-4 grid grid-cols-1 text-center my-3 py-3 shadow-md rounded-md">
          No jobs found
        </div>
      )}
    </div>
  );
};

export default Joblist;
