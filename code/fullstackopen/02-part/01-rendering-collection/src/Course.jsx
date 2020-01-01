const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h1 className="text-2xl text-lime-600 font-bold">{course.name}</h1>
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
