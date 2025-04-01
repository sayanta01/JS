const Course = ({ courses }) => {
  return (
    <>
      <h1>{courses[0].name}</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map((part) => (
              <li key={part.id}>
                {part.name}: {part.exercises}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Course;
