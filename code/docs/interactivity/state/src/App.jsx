import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>

      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      {/* Shows current sculpture number out of total */}
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      {/* Toggle details */}
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>

      {/* Conditional rendering */}
      {showMore && <p>{sculpture.description}</p>}

      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

// Conditional ? Rendering : ---------------------------------------------------

// import { useState } from "react";
// import { useEffect } from "react";
//
// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);
//
//   const [isSubscribed, setSubscribed] = useState(false);
//   const toggleSubscription = () => {
//     setSubscribed(!isSubscribed);
//   };
//
//   // let buttonText;
//   // let buttonColor;
//   // let textColor;
//   //
//   // if (isSubscribed) {
//   //   buttonText = "✅Subscribed";
//   //   buttonColor = "gray";
//   //   textColor = "white";
//   // } else {
//   //   buttonText = "🔔Subscribe";
//   //   buttonColor = "blue";
//   //   textColor = "black";
//   // }
//
//   return (
//     <>
//       <h2>{isLoading ? "Loading..⏳" : "Welcome to the Dashboard!🎉"}</h2>
//       <button
//         onClick={toggleSubscription}
//         style={{
//           backgroundColor: isSubscribed ? "gray" : "blue",
//           color: isSubscribed ? "white" : "black",
//         }}
//       >
//         {isSubscribed ? "✅Subscribed" : "🔔Subscribe"}
//       </button>
//       {/* <button */}
//       {/*   onClick={toggleSubscription} */}
//       {/*   style={{ backgroundColor: buttonColor, color: textColor }}> {buttonText} */}
//       {/* </button> */}
//     </>
//   );
// }
