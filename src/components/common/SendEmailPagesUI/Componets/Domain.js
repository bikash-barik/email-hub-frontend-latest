import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import URLAPI from "../API/URLAPI";
import Stepper from "./Stepper";

import { useSelector } from "react-redux";

function AddDomain() {
  const [domainList, setDomainList] = useState(null);
  const [data, setData] = useState([]);
  const [length, setlength] = useState("");
  const history = useHistory();
  const [checkedDomains, setCheckedDomains] = useState([]);
  const [masterCheckboxChecked, setMasterCheckboxChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (domain) => {
    const updatedDomains = [...checkedDomains];
    if (updatedDomains.includes(domain)) {
      updatedDomains.splice(updatedDomains.indexOf(domain), 1);
    } else {
      updatedDomains.push(domain);
    }
    setCheckedDomains(updatedDomains);
  };

  // Function to handle master checkbox change
  const handleMasterCheckboxChange = () => {
    if (masterCheckboxChecked) {
      setCheckedDomains([]);
    } else {
      const allDomains = data.map((domain) => domain);
      setCheckedDomains(allDomains);
    }
    setMasterCheckboxChecked(!masterCheckboxChecked);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("domainList", domainList);
    try {
      const config = {
        headers: {
          "Content-Type": undefined,
        },
      };
      const response = await axios.post(
        `${URLAPI}/api/domain`,
        formData,
        config
      );
      console.log(response.data.domains);
      setData(response.data.domains);
      setlength(response.data.domains.length);
      // Send response to another API endpoint
      // const otherApiConfig = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // const otherApiResponse = await axios.post(
      //   `${URLAPI}/domains`,
      //   response.data,
      //   otherApiConfig
      // );
      // console.log(otherApiResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Save checkedDomains array to localStorage
    localStorage.setItem("checkedDomains", JSON.stringify(checkedDomains));
  }, [checkedDomains]);

  const EmailSand = () => {
    history.push("/DomainCountry");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {/* <Stepper/> */}
      <h3>
        <i class="bi bi-geo-alt-fill"></i>
        <span> Applications /</span>Add Domain
      </h3>
      <div className="container pt-5" style={{ marginTop: "12rem" }}>
        <div className="d-flex justify-content-between">
          <div className="form-input">
            <label htmlFor="domainList">
              Domain List : Only select .csv files
            </label>
            <div className="d-flex justify-content-between">
              <input
                type="file"
                name="domainList"
                id="domainList"
                onChange={(event) => setDomainList(event.target.files[0])}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary p-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="row mt-5">
          <div class="col">
            <h2>Valid emails:</h2>
          </div>
          <div class="col">
            <h4>
              Total Domains :
              <span className="ml-2 text-success"> {length}</span>
            </h4>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th className="p-1" scope="col">
                #SL.
              </th>
              <th className="p-1" scope="col">
                <input
                  type="checkbox"
                  checked={masterCheckboxChecked}
                  onChange={handleMasterCheckboxChange}
                />
              </th>
              <th className="p-1" scope="col">
                Domain
              </th>
              <th className="p-1" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((domain, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={checkedDomains.includes(domain)}
                    onChange={() => handleCheckboxChange(domain)}
                    style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                  />
                </td>
                <td>{domain}</td>
                <td className="p-1">
                  <button type="button" className="btn btn-success p-1">
                    Upload successfully
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AddDomain;
