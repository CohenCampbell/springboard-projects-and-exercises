import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // get all companies
  static async getCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  static async getJob(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.job;
  }

  static async register(newUserInfo) {
    let res = await this.request("auth/register", newUserInfo, "post");
    return res.token;
  }

  static async login(userInfo) {
    let res = await this.request("auth/token", userInfo, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(userInfo) {
    let res = await this.request(
      `users/${sessionStorage.getItem("username")}`,
      userInfo,
      "patch"
    );
    return res.user;
  }

  static async applyJob(jobId) {
    let res = await this.request(
      `users/${sessionStorage.getItem("username")}/jobs/${jobId}`,
      {},
      "post"
    );
    return res.applied;
  }
}

JoblyApi.token = sessionStorage.getItem("token");

export default JoblyApi;
