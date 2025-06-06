function Drink({ name }) {
  let part, caffeine, age;
  if (name === "tea") {
    part = "lead";
    caffeine = "15-70 mg/cpu";
    age = "4,000+ years";
  } else if (name === "coffee") {
    part = "bean";
    caffeine = "80-185 mg/cpu";
    age = "1,000+ years";
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant: {part}</dt>
        <dt>Caffeine content: {caffeine}</dt>
        <dt>Age: {age}</dt>
        {/* <dd></dd> */}
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

// -----------------------------------------------------------------------------

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = name + "✅";
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }
//
// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }
