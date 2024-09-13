"use strict";

const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Job = require("./job.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  jobIds,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  const newJob = {
    title: "new",
    salary: 1,
    equity: "0.1",
    companyHandle: "c1",
  };

  test("works", async function () {
    let job = await Job.create(newJob);
    expect(job).toEqual({
        title: "new",
        salary: 1,
        equity: "0.1",
        companyHandle: "c1",
        id: expect.any(Number)
      });
  });

});

/************************************** findAll */

describe("findAll", function () {
  test("works: no filter", async function () {
    let jobs = await Job.findAll();
    expect(jobs).toEqual([
        {
            id: jobIds[0]["id"],
            title: "Job1",
            salary: 100,
            equity: "0.1",
            companyHandle: "c1",
            companyName: "C1",
          },
          {
            id: jobIds[1]["id"],
            title: "Job2",
            salary: 200,
            equity: "0.2",
            companyHandle: "c1",
            companyName: "C1",
          },
          {
            id: jobIds[2]["id"],
            title: "Job3",
            salary: 300,
            equity: "0",
            companyHandle: "c1",
            companyName: "C1",
          },
          {
            id: jobIds[3]["id"],
            title: "Job4",
            salary: null,
            equity: null,
            companyHandle: "c1",
            companyName: "C1",
          },
    ]);
  });

  test("works: filter title", async function(){
    let jobs = await Job.findAll({title: "Job2"});
    expect(jobs).toEqual([
        {
            id: jobIds[1]["id"],
            title: "Job2",
            salary: 200,
            equity: "0.2",
            companyHandle: "c1",
            companyName: "C1",
          }
    ]);
  });

  test("works: filter minSalary", async function(){
    let jobs = await Job.findAll({minSalary: 300});
    expect(jobs).toEqual([
        {
            id: jobIds[2]["id"],
            title: "Job3",
            salary: 300,
            equity: "0",
            companyHandle: "c1",
            companyName: "C1",
          }
    ]);
  });

  test("works: filter equity", async function(){
    let jobs = await Job.findAll({hasEquity: true});
    expect(jobs).toEqual([
        {
            id: jobIds[0]["id"],
            title: "Job1",
            salary: 100,
            equity: "0.1",
            companyHandle: "c1",
            companyName: "C1",
          },
          {
            id: jobIds[1]["id"],
            title: "Job2",
            salary: 200,
            equity: "0.2",
            companyHandle: "c1",
            companyName: "C1",
          }
    ]);
  });
});

  test("works: filter all", async function(){
    let jobs = await Job.findAll({title: "Job2", minSalary: 200, hasEquity: true});
    expect(jobs).toEqual([
        {
            id: jobIds[1]["id"],
            title: "Job2",
            salary: 200,
            equity: "0.2",
            companyHandle: "c1",
            companyName: "C1",
          }
    ]);
  });


/************************************** get */

describe("get", function () {
  test("works", async function () {
    let job = await Job.get(jobIds[0]["id"]);
    expect(job).toEqual({
        id: jobIds[0]["id"],
        title: "Job1",
        salary: 100,
        equity: "0.1",
        company: {
          handle: "c1",
          name: "C1",
          description: "Desc1",
          numEmployees: 1,
          logoUrl: "http://c1.img",
        },
      });
  });

  test("not found if no such job", async function () {
    try {
      await Job.get(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});

/************************************** update */

describe("update", function () {
  const updateData = {
   title: "test1000",
   salary: 100000,
   equity: "0.23"
  };

  test("works", async function () {
    let job = await Job.update(jobIds[0]["id"], updateData);
    expect(job).toEqual({
      id: jobIds[0]["id"],
      companyHandle: "c1",
      ...updateData,
    });
  });

  test("not found if no such job", async function () {
    try {
      await Job.update(0, updateData);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });

  test("bad request with no data", async function () {
    try {
      await Job.update("c1", {});
      fail();
    } catch (err) {
      expect(err instanceof BadRequestError).toBeTruthy();
    }
  });
});

/************************************** remove */

describe("remove", function () {
  test("works", async function () {
    await Job.remove(jobIds[0]["id"]);
    const res = await db.query(
        "SELECT id FROM jobs WHERE id=$1", [jobIds[0]["id"]]);
    expect(res.rows.length).toEqual(0);
  });

  test("not found if no such job", async function () {
    try {
      await Job.remove(0);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});
