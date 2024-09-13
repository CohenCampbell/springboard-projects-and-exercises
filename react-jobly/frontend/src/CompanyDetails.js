import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

function CompanyDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState({});
  const [user, setUser] = useState({});
  const { handle } = useParams();

  useEffect(() => {
    async function asyncFunc() {
      const res = await JoblyApi.getCompany(handle);
      const user = await JoblyApi.getUser(sessionStorage.getItem("username"));
      setUser(user);
      setCompany(res);
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
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        {company.jobs.map((job) => {
          let applied = false;
          if (user.applications.includes(job.id)) applied = true;
          return (
            <div>
              <JobCard job={job} applied={applied} />
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{renderHtml()}</div>;
}

export default CompanyDetails;
