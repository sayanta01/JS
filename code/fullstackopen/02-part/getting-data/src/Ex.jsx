import { useState, useEffect } from "react";
import axios from "axios";

// pass - sk$$@Ki48
// Your API Key: b6475782325901234aed5bd1

const Ex = () => {
  const [value, setValue] = useState("");
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState(null);

  // useEffect(() => {
  //   console.log("effect run, currency is now", currency);
  //
  //   // skip if currency is not defined
  //   if (currency) {
  //     console.log("fetching exchange rates...");
  //     axios.get(`https://open.er-api.com/v6/latest/${currency}`).then((res) => {
  //       // console.log(res);
  //       setRates(res.data.rates);
  //     });
  //   }
  // }, [currency]);

  // const onSearch = (event) => {
  //   event.preventDefault();
  //   setCurrency(value);
  // };

  const onSearch = (event) => {
    event.preventDefault();
    axios.get(`https://open.er-api.com/v6/latest/${value}`).then((res) => {
      setRates(res.data.rates);
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      {/* <h1>{rates}</h1> */}
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </div>
  );
};

export default Ex;
