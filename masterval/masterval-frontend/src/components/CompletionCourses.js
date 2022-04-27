import React from "react";
import DisplayCourse from "./DisplayCourse";

const CompletionCourses = ({
  completingCourses,
  selectedCourses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
}) => {
  console.log(completingCourses);
  return (
    <>
      {completingCourses.map((course) => {
        return (
          <DisplayCourse
            courseinfo={course}
            homePage={true}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
            setSelectedProfileCourses={setSelectedProfileCourses}
            selectedProfileCourses={selectedProfileCourses}
          />
        );
      })}
    </>
  );
};

export default CompletionCourses;
