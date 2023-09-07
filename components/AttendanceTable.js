import React from "react";
import styles from "./AttendanceSheet.module.css";
import { format } from "date-fns";
import Student from "./Student";

const AttendanceTable = ({ students, attendanceRecords, toggleAttendance }) => {
  return (
    <table className={styles.full}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.cell}>Student Name</th>
          {attendanceRecords.map((record) => (
            <th
              key={record.date}
              className={`${styles.cell} ${styles.textCenter} ${styles.whitespaceNowrap}`}
            >
              {format(record.date, "dd/MM/yyyy")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student, studentIndex) => (
          <Student
            key={student.name}
            name={student.name}
            attendanceRecords={attendanceRecords}
            studentIndex={studentIndex}
            toggleAttendance={toggleAttendance}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
