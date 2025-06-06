import { getImageUrl } from "./utils.js";

const Avatar = () => {}
function Avatar() {}

function Avatar({ person, size }) {
  // Props let you encapsulate logic like this inside the Avatar component (and change it later if needed)
  // So that everyone can use the <Avatar> component without thinking about how the images are requested and resized
  let thumbnailSize = "s";
  if (size > 90) {
    thumbnailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

// -----------------------------------------------------------------------------

// import "./App.css";
// import { getImageUrl } from "./utils";
//
// function Avatar({ person, size }) {
//   return (
//     <img
//       className="border-2 border-indigo-200 rounded-full avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
//
// function Card({ children }) {
//   return (
//     <>
//       <div className="card">{children}</div>
//     </>
//   );
// }
//
// export default function App() {
//   // Profile
//   return (
//     <>
//       <Card>
//         <Clock color="blue" />
//         {/* Passing JSX as children  */}
//         <Avatar
//           person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
//           size={100}
//         />
//
//         {/* configure Avatar to render in many different ways with different props */}
//         {/* <Avatar */}
//         {/*   person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} */}
//         {/*   size={80} */}
//         {/* /> */}
//         {/* <Avatar */}
//         {/*   person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} */}
//         {/*   size={60} */}
//         {/* /> */}
//       </Card>
//     </>
//   );
// }
