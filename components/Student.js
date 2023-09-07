import React from "react";
import styles from "./AttendanceSheet.module.css";

const Student = ({ name, attendanceRecords, studentIndex, toggleAttendance }) => {
  return (
    <tr key={name}>
      <td className={`${styles.cell} ${styles.border} ${styles.px2}`}>
        {name}
      </td>
      {attendanceRecords.map((record, recordIndex) => (
        <td
          key={record.date}
          className={`${styles.cell} ${styles.border} ${styles.textCenter}`}
        >
          <button
            onClick={() => toggleAttendance(record.date, studentIndex)}
            className={
              record.records[studentIndex]
                ? `${styles.presentButton} ${styles.presentButtonActive}`
                : `${styles.absentButton} ${styles.absentButtonActive}`
            }
          >
            {record.records[studentIndex] ? "Present" : "Absent"}
          </button>
        </td>
      ))}
    </tr>
  );
};

export default Student;
