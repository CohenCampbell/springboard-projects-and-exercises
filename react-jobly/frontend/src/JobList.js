import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function asyncFunc() {
      const res = await JoblyApi.getJobs();
      const user = await JoblyApi.getUser(sessionStorage.getItem("username"));
      setUser(user);
      setJobs(res);
      setIsLoading(false);
    }
    asyncFunc();
  }, []);

  function renderHtml() {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        {jobs.map((job) => {
          let applied = false;
          if (user.applications.includes(job.id)) applied = true;
          return (
            <div>
              <JobCard job={job} applied={applied} />
              <footer>Company: {job.companyName}</footer>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{renderHtml()}</div>;
}

export default JobList;
