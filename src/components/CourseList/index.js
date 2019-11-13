import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Container } from './styles';

const CourseList = () => {
  const qty = 3;

  const courses = useSelector(state => state.data.slice(0, qty), [qty]);
  const dispatch = useDispatch();

  function addCourseAction(title) {
    return { type: "ADD_COURSE", title };
  }

  function addCourse() {
    dispatch(addCourseAction("Javascript"));
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  );
};

export default CourseList;
