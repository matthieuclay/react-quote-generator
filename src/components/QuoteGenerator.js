import { useEffect, useState } from "react";
import axios from "axios";
import "./QuoteGenerator.scss";
import Quote from "./Quote";

/* response : { author: "", text: "" } */
const BASE_URL = "https://type.fit/api/quotes";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({ author: "", text: "" });

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setQuotes(response.data);
      setQuote(response.data[Math.floor(Math.random() * response.data.length)]);
    });
  }, []);

  function getQuote() {
    const randomKey = Math.floor(Math.random() * quotes.length);

    if (quote === quotes[randomKey]) {
      this.getQuote();
      return;
    }

    setQuote(quotes[randomKey]);
  }

  return (
    <div className="quote-generator">
      <h1>Quote Generator</h1>
      <Quote quote={quote} />
      <button onClick={getQuote}>
        <span className="button_top">Another quote!</span>
      </button>
    </div>
  );
}

export default QuoteGenerator;
