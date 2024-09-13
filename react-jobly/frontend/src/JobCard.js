import React, { useState } from "react";
import JoblyApi from "./JoblyApi";

function JobCard({ job, applied }) {
  const [isApplied, setIsApplied] = useState(applied);

  async function handleApply() {
    try {
      let res = await JoblyApi.applyJob(job.id);
      if (res) setIsApplied(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <br />
      <h4>{job.title}</h4>
      <p>Salary: {job.salary}</p>
      <p> Equity: {job.equity}</p>
      {!applied && <button onClick={handleApply}>Apply</button>}
      {applied && <p>Applied!</p>}
      <br />
    </div>
  );
}

export default JobCard;
