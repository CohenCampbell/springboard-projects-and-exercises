import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function asyncFunc() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
      setIsLoading(false);
    }
    asyncFunc();
  }, []);

  function renderHtml() {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return companies.map((comp) => {
      return <CompanyCard comp={comp} />;
    });
  }

  return <div>{renderHtml()}</div>;
}

export default CompanyList;
