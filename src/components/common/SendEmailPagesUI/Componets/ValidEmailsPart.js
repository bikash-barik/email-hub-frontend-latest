import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import URLAPI from "../API/URLAPI";
import { useSelector } from "react-redux";
import UpgradURPlanPart from "../../../../user/UpgradPlan/UpgradURPlanPart";

function ValidEmailsPart() {
  const [response, setResponse] = useState(null);
  const history = useHistory();
  const [emailList, setEmailList] = useState(null);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("emailList", emailList);
    // const [, domain] = response.split("@");
    // console.log(domain)

    axios
      .post(`${URLAPI}/api/domain/validateEmail`, formData, {
        headers: {
          "Content-Type": undefined,
        },
      })
      .then((response) => {
        setResponse(response.data);
        console.log(response);
        // console.log("dgjvnfd")
        // window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const EmailSand = () => {
    history.push("/EmailSand");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo.applicationAccess3 ? (
        <>
          <h3>
            <i class="bi bi-geo-alt-fill"></i>
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
            {response && (
              <div>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <h2>Valid emails:</h2>
                    </div>
                    <div class="col">
                      <h4>
                        Total Valid Emails :
                        <span className="ml-2 text-success">
                          {response.validEmails.length}{" "}
                        </span>{" "}
                      </h4>
                    </div>
                    <div class="col">
                      <h4>
                        Total Invalid Emails :
                        <span className="ml-2 text-danger">
                          {response.invalidEmails.length}{" "}
                        </span>
                      </h4>
                    </div>
                  </div>

                  <table class="table table-hover">
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
                        <tr>
                          <th scope="row"> {i + 1}</th>

                          <td>{email.split("@")[1]}</td>
                          <td>{email}</td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Valid
                            </button>
                          </td>
                        </tr>
                      ))}
                      {response.invalidEmails.map((email, i) => (
                        <tr>
                          <th scope="row"> {i + 1}</th>

                          <td>Domain</td>
                          <td>{email}</td>
                          <td>
                            <button type="button" class="btn btn-danger">
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
