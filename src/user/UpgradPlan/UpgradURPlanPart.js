import React, { useState } from "react";


function UpgradURPlanPart() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <div className={`container ${inactive ? "inactive" : ""}`}></div>
      <h3>
        <i class="bi bi-geo-alt-fill"></i>
        <span> Applications /</span>...
      </h3>
      <div>
        <div className=" d-flex justify-content-center align-items-center align-item-center mt-15">
          <div className="">
            <a href="/#">
              <img
                src="https://email.uplers.com/blog/wp-content/uploads/2022/07/1-Signatures-blog.gif"
                class="w-25"
                alt=""
        
              />{" "}
            </a>
            <h3>  Upgrad Your Plan and Contact With Admin</h3>
            
          </div>
        </div>
        <div class="row g-0 bg-light position-relative ">
          
          <div class="col-md-12 w-50 p-4 ps-md-0 test-center d-flex align-items-center">
           

            <a href="#" class="stretched-link">
              {/* Go somewhere */}
            </a>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default UpgradURPlanPart;
