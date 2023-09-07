import React, { useState } from "react";
import { format, eachDayOfInterval, isSunday } from "date-fns";
import styles from "./AttendanceSheet.module.css";
import AttendanceTable from "./AttendanceTable";
import studentsData from "./studentsData"; // Import student data

const AttendanceSheet = () => {
  const [students] = useState(studentsData);

  // const [attendance, setAttendance] = useState(
  //   Array(students.length).fill("Absent")
  // );

  const [currentMonth] = useState(new Date()); // Current month
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const sundaysOfMonth = eachDayOfInterval({
    start: startOfMonth,
    end: endOfMonth,
  }).filter(isSunday);

  // Initialize attendance records for each Sunday of the month
  const initialAttendanceRecords = sundaysOfMonth.map((sunday) => ({
    date: sunday,
    records: Array(students.length).fill(false), // Initialize as 'false' for each student
  }));

  const [attendanceRecords, setAttendanceRecords] = useState(
    initialAttendanceRecords
  );

  const toggleAttendance = (date, studentIndex) => {
    setAttendanceRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.date === date
          ? {
              ...record,
              records: [
                ...record.records.slice(0, studentIndex),
                !record.records[studentIndex],
                ...record.records.slice(studentIndex + 1),
              ],
            }
          : record
      )
    );
  };

  // const toggleStudentAttendance = (studentIndex) => {
  //   const updatedAttendance = [...attendance];
  //   updatedAttendance[studentIndex] =
  //     attendance[studentIndex] === "Absent" ? "Present" : "Absent";
  //   setAttendance(updatedAttendance);
  // };

  return (
    <div className={styles.container}>
      <h1 className={`${styles.text2xl} ${styles.fontSemibold} ${styles.mt4} ${styles.mb6}`}>
        First Holy Communion Attendance Sheet for {format(currentMonth, "MMMM yyyy")}
      </h1>
      <div className={styles.overflowXAuto}>
        <AttendanceTable
          students={students}
          attendanceRecords={attendanceRecords}
          toggleAttendance={toggleAttendance}
        />
      </div>
    </div>
  );
};

export default AttendanceSheet;