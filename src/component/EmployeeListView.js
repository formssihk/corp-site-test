import React, { useEffect, useState } from "react";
import { useDirectus } from "@/provider/DirectusProvider";
import { readItems } from "@directus/sdk";

import EmployeeInfoView from "@/component/EmployeeInfoView";

const EmployeeListView = () => {
  const directus = useDirectus();
  const [employees, setEmplyees] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const employeeInformationResponse =  await directus.request(readItems("Employee_Information", {
          fields: ["*.*"],
          filter: {
            status: {
              _eq: "published"
            }
          }
        }));
        setEmplyees(employeeInformationResponse);
      } catch (error) {
        console.error("[ERROR]Fetching items:", error);
      }
    };

    fetchItems();
  }, [directus]);

  return (
    <div>
      <h1>Our Leaders</h1>
      {employees.map((employee) => (
        <EmployeeInfoView key={employee.uuid} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeListView;