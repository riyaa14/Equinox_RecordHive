import React, { useState } from "react";

const GradRequirements = (props) => {
  //   const { sid } = props;
  const [requirements, setRequirements] = useState(null);

  //   async function getRequirementsHandler(e) {
  //     e.preventDefault();
  //     const res = await fetch(`http://localhost:3007/api/graduation/${sid}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     if (data.success === true) {
  //       setRequirements(data.requirements);
  //     }
  //   }

  return props.trigger ? (
    <div className="details">
      <div className="details-inner">
        <button
          className="close-GPA-cal"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>

        <h3>Graduation Requirements</h3>
        <button>View Requirements</button>
        {requirements && (
          <div className="requirements">
            {requirements.map((requirement, index) => (
              <div key={index}>
                <h4>{requirement.title}</h4>
                <ul>
                  {requirement.courses.map((course, index) => (
                    <li key={index}>
                      {course.code} - {course.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default GradRequirements;
