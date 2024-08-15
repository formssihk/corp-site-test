import React from "react";

import DirectusImage from "@/component/common/DirectusImage";

import styles from "@/styles/EmployeeInfoView.module.scss";

const EmployeeInfoView = ({ employee }) => {
  if (!employee) {
    return <div>Coming soon...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <DirectusImage  fileId={employee.icon.id} altText={employee.name} width={150} height={150} quality={20}/>
      </div>
      <h2>{employee.name}</h2>
      {(employee.title).map((title) => (
        <h3 key={title.jtid}>{title.display_title}</h3>
      ))}
    </div>
  );
};

export default EmployeeInfoView;