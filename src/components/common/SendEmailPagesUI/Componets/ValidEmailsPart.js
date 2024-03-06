import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import URLAPI from "../API/URLAPI";
import { useSelector } from "react-redux";
import UpgradURPlanPart from "../../../../user/UpgradPlan/UpgradURPlanPart";

function ValidEmailsPart() {
  const [response, setResponse] = useState(null);
  const history = useHistory();
  const [emailList, setEmailList] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // Check if there's data in localStorage and fetch it
    const storedResponse = JSON.parse(localStorage.getItem("checkedDomains"));
    console.log("valid", storedResponse);
    if (storedResponse) {
      setResponse(storedResponse);
    }
    AutohandleFormSubmit();
  }, []);

  const AutohandleFormSubmit = async () => {
    // Retrieve checkedDomainsArray from localStorage
    const storedCheckedDomains =
      JSON.parse(localStorage.getItem("checkedDomains")) || [];
    console.log("Valid checked", storedCheckedDomains);

    try {
      const response = await fetch(`${URLAPI}/api/domain/autovalidateEmail`, {
        method: "POST",
        body: JSON.stringify({ domains: storedCheckedDomains }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setResponse(data);
      // localStorage.setItem("emailValidationResponse", JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileUpload = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("emailList", emailList);

      const response = await axios.post(
        `${URLAPI}/api/domain/validateEmail`,
        formData,
        {
          headers: {
            "Content-Type": undefined,
          },
        }
      );

      setResponse(response.data);
      console.log("response", response);
    } catch (error) {
      console.error(error);
    }
  };

  const EmailSand = () => {
    history.push("/EmailSand");
  };

  return (
    <>
      {userInfo.applicationAccess3 ? (
        <>
          <h3>
            <i className="bi bi-geo-alt-fill"></i>
            <span> Applications /</span>Valid Email
          </h3>
          <div className="container p-5">
            <div className="d-flex">
              <div className="form-input">
                <label htmlFor="emailList">Email List </label>
                <div className="d-flex justify-content-between">
                  <input
                    type="file"
                    name="emailList"
                    id="emailList"
                    onChange={(e) => setEmailList(e.target.files[0])}
                  />

                  <button
                    className="btn btn-primary p-1"
                    onClick={handleFileUpload}
                  >
                    Validate Your Email
                  </button>
                  {/* <button onClick={EmailSand} className="btn btn-primary">Next</button> */}
                </div>
              </div>
            </div>

            <hr />
            {response && response.validEmails && response.invalidEmails && (
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h2>Valid emails:</h2>
                    </div>
                    <div className="col">
                      <h4>
                        Total Valid Emails :
                        <span className="ml-2 text-success">
                          {response.validEmails.length}
                        </span>
                      </h4>
                    </div>
                    <div className="col">
                      <h4>
                        Total Invalid Emails :
                        <span className="ml-2 text-danger">
                          {response.invalidEmails.length}
                        </span>
                      </h4>
                    </div>
                  </div>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Domain</th>
                        <th scope="col">Emails</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.validEmails.map((email, i) => (
                        <tr key={i}>
                          <th scope="row"> {i + 1}</th>
                          <td>{email.split("@")[1]}</td>
                          <td>{email}</td>
                          <td>
                            <button type="button" className="btn btn-success">
                              Valid
                            </button>
                          </td>
                        </tr>
                      ))}
                      {response.invalidEmails.map((email, i) => (
                        <tr key={i}>
                          <th scope="row"> {i + 1}</th>
                          <td>Domain</td>
                          <td>{email}</td>
                          <td>
                            <button type="button" className="btn btn-danger">
                              Invalid
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <UpgradURPlanPart />
      )}
    </>
  );
}

export default ValidEmailsPart;
