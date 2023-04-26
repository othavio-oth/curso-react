import React from "react";
import students from "../../data/students";
export default () => {
  const studendsList = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}: {student.name} -> {student.rating}
      </li>
    );
  });
  return (
    <div style={{}}>
      <ul>{studendsList}</ul>
    </div>
  );
};
