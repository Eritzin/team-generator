import React from "react";
import Group from "./Group";

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}
const createGroups = props => {
  const { students, maxStudentsPerGroup } = props;
  const activeStudents = [];
  students.forEach(student => {
    student.active && activeStudents.push(student);
  });

  shuffleArray(activeStudents);

  const slicedArray = chunk(activeStudents, Number(maxStudentsPerGroup));

  return slicedArray;
};

const renderGroups = props => {
  const groups = createGroups(props);
  return groups.map((group, index) => (
    <Group group={group} key={index} index={index} />
  ));
};

const Groups = props => {
  const { maxStudentsPerGroup } = props;
  return (
    <div className="groups">
      <h3>Groups</h3>
      {/* We have to have a maxStudentsPerGroup selected before we can generate */}
      {maxStudentsPerGroup > 0 ? renderGroups(props) : <div>Select...</div>}
    </div>
  );
};

export default Groups;
