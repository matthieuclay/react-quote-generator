function Quote({ quote }) {
  return (
    <div className="quote">
      <p>{quote.text}</p>
      <span>— {quote.author ? quote.author : "Unknown"}</span>
    </div>
  );
}

export default Quote;
