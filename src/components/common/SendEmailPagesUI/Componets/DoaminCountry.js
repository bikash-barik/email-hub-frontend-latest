import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import URLAPI from "../API/URLAPI";
import { useSelector } from "react-redux";
import UpgradURPlanPart from "../../../../user/UpgradPlan/UpgradURPlanPart";

function DomainCountry() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [checkedDomainsArray, setCheckedDomainsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("All"); // State to track selected country
  const history = useHistory();
  const [checkedDomains, setCheckedDomains] = useState([]);

  useEffect(() => {
    // Retrieve checkedDomainsArray from localStorage when component mounts
    const storedCheckedDomains = JSON.parse(
      localStorage.getItem("checkedDomains")
    );
    setCheckedDomainsArray(storedCheckedDomains || []);
    console.log("storedCheckedDomains", storedCheckedDomains);
    AutohandleFormSubmit();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const AutohandleFormSubmit = async () => {
    setLoading(true); // Show loading indicator

    // Retrieve checkedDomainsArray from localStorage
    const storedCheckedDomains =
      JSON.parse(localStorage.getItem("checkedDomains")) || [];

    try {
      const response = await fetch(`${URLAPI}/api/domain/autodomainCountry`, {
        method: "POST",
        body: JSON.stringify({ domains: storedCheckedDomains }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setResults(data);
      setFilteredResults(data);
      console.log("result", results);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false); // Hide loading indicator
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("domainList", file);
    const response = await fetch(`${URLAPI}/api/domain/domainCountry`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    setResults(data);
    setFilteredResults(data);
    console.log(filteredResults);
  };

  const handleFilterChange = (e) => {
    const selectedRegion = e.target.value;
    setSelectedCountry(selectedRegion); // Update selected country
    // Filter results based on selected country
    if (selectedRegion === "All") {
      setFilteredResults(results);
    } else {
      const filtered = results.filter(
        ({ country }) => country === selectedRegion
      );
      setFilteredResults(filtered);
    }
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleCheckboxChange = (domain) => {
    const updatedDomains = [...checkedDomains];
    if (updatedDomains.includes(domain)) {
      updatedDomains.splice(updatedDomains.indexOf(domain), 1);
    } else {
      updatedDomains.push(domain);
    }
    setCheckedDomains(updatedDomains);
  };

  return (
    <>
      {userInfo.applicationAccess1 ? (
        <>
          <h3>
            <i className="bi bi-geo-alt-fill"></i>
            <span> Applications /</span>Domain Country
          </h3>
          <div className="container pt-5">
            <div className="d-flex">
              <div className="form-input">
                <label htmlFor="emailList"> Domain List </label>
                <div className="d-flex justify-content-between">
                  <input
                    type="file"
                    name="emailList"
                    id="emailList"
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={handleFormSubmit}
                    className="btn btn-primary p-1"
                    disabled={loading} // Disable button when loading
                  >
                    Find Country Name
                  </button>
                </div>
              </div>
            </div>
            {loading && <p>Loading...</p>} {/* Loading indicator */}
            <hr />
            <div className="row">
              <div className="col">
                <h2>Domains:</h2>
              </div>
              <div className="col">
                <h4>
                  Total Domains :
                  <span className="ml-2 text-success">
                    {filteredResults.length}
                  </span>{" "}
                </h4>
              </div>
              <div className="col">
                <h4>
                  Not Found Country :<span className="ml-2 text-danger"></span>
                </h4>
              </div>
              <div className="col">
                <h4>Filter</h4>
                <select
                  value={selectedCountry}
                  onChange={handleFilterChange}
                  className="w-60"
                  aria-label="Filter Domains By Name"
                >
                  <option value="All">All Domains</option>
                  {filteredResults.length > 0 &&
                    filteredResults
                      .reduce((uniqueCountries, { country }) => {
                        if (!uniqueCountries.includes(country)) {
                          uniqueCountries.push(country);
                        }
                        return uniqueCountries;
                      }, [])
                      .map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#SL</th>
                  <th scope="col">Select</th>
                  <th scope="col">Domain</th>
                  <th scope="col">Country Name</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map(({ domain, country }, index) => (
                  <tr key={domain}>
                    <td>{index + 1}</td>
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

                      {/* Ensure there's no CSS hiding the checkbox */}
                    </td>
                    <td>{domain}</td>
                    <td>
                      {country && (
                        <ReactFlagsSelect
                          countries={[
                            "US",
                            "GB",
                            "CA",
                            "FR",
                            "DE",
                            "IT",
                            "ES",
                            "IN",
                            "CN",
                            "JP",
                            "KR",
                            "AU",
                          ]}
                          customLabels={{
                            US: "USA",
                            GB: "UK",
                            CA: "Canada",
                            FR: "France",
                            DE: "Germany",
                            IT: "Italy",
                            ES: "Spain",
                            IN: "India",
                            CN: "China",
                            JP: "Japan",
                            KR: "South Korea",
                            AU: "Australia",
                          }}
                          selected={country}
                        />
                      )}
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

export default DomainCountry;
