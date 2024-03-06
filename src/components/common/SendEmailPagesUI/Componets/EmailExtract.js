import React, { useEffect, useState } from "react";
import URLAPI from "../API/URLAPI";
import { useSelector } from "react-redux";
import UpgradURPlanPart from "../../../../user/UpgradPlan/UpgradURPlanPart";

function EmailExtract() {
  const [file, setFile] = useState(null);
  const [emails, setEmails] = useState({});
  const [checkedDomainsArray, setCheckedDomainsArray] = useState([]);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkedDomains, setCheckedDomains] = useState([]);
  const [masterCheckboxChecked, setMasterCheckboxChecked] = useState(false);

  useEffect(() => {
    const storedCheckedDomains = JSON.parse(
      localStorage.getItem("checkedDomains")
    );
    setCheckedDomainsArray(storedCheckedDomains || []);
    console.log("emailExtract", storedCheckedDomains);
    if (storedCheckedDomains && storedCheckedDomains.length > 0) {
      AutohandleFormSubmit();
    }
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const AutohandleFormSubmit = async () => {
    setLoading(true);

    const storedCheckedDomains =
      JSON.parse(localStorage.getItem("checkedDomains")) || [];

    try {
      const response = await fetch(`${URLAPI}/api/domain/autoextractEmail`, {
        method: "POST",
        body: JSON.stringify({ domains: storedCheckedDomains }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setResults(data);
      setFilteredResults(data);
      console.log("result", data);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("domainList", file);

    const response = await fetch(`${URLAPI}/api/domain/extractEmail`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setEmails(data);
    setFilteredResults(data);
    console.log("submit Handler", data);
  };

  const handleCheckboxChange = (domain) => {
    const updatedDomains = [...checkedDomains];
    if (updatedDomains.includes(domain)) {
      updatedDomains.splice(updatedDomains.indexOf(domain), 1);
    } else {
      updatedDomains.push(domain);
    }
    setCheckedDomains(updatedDomains);
    localStorage.setItem("checkedDomains", JSON.stringify(updatedDomains));
  };

  const handleMasterCheckboxChange = () => {
    if (masterCheckboxChecked) {
      setCheckedDomains([]);
    } else {
      const allDomains = filteredResults.map((item) => item.domain);
      setCheckedDomains(allDomains);
    }
    setMasterCheckboxChecked(!masterCheckboxChecked);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo.applicationAccess2 ? (
        <>
          <h3>
            <i className="bi bi-geo-alt-fill"></i>
            <span> Applications /</span>Email Extract
          </h3>
          <div className="container pt-5">
            <form onSubmit={handleFormSubmit}>
              <input
                type="file"
                name="domainList"
                onChange={handleFileChange}
              />
              <button type="submit" className="btn btn-primary p-1">
                Extract Emails
              </button>
            </form>
            <hr></hr>
            <table className="table table-striped-columns ">
              <thead>
                <tr className="">
                  <th>#SL</th>
                  <th>
                    <input
                      type="checkbox"
                      checked={masterCheckboxChecked}
                      onChange={handleMasterCheckboxChange}
                    />
                  </th>
                  <th>Domain</th>
                  <th>Emails</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(filteredResults).map((domain, i) => (
                  <tr key={domain}>
                    <td>
                      <h3>{i + 1}</h3>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={checkedDomains.includes(domain)}
                        onChange={() => handleCheckboxChange(domain)}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "5px",
                        }}
                      />
                    </td>
                    <td>
                      <h3 className="d-flex justify-content-center align-items-center">
                        {domain}
                      </h3>
                    </td>
                    <td>
                      <ul
                        className="overflow-auto"
                        style={{ maxHeight: "150px" }}
                      >
                        {emails[domain] &&
                          emails[domain].map((email, i) => (
                            <p key={email}>
                              {i + 1}.{email}
                            </p>
                          ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <UpgradURPlanPart />
      )}
    </>
  );
}

export default EmailExtract;
