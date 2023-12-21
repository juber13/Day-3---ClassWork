import quotes from "./QuoteData"
const Quote = () => {
  return (
    <div className="quotes flex flex-col gap-10 w-4/5 m-auto mt-10 pb-3">
     {quotes.map((Quote , index) => {
      return(
        <div className="quotes bg-slate-100 p-5 rounded box shadow-lg" key={index}>
            <p>{Quote.text}</p>
            <small><strong>{Quote.author}</strong></small>
        </div>
      )
     })}
    </div>
  )
}

export default Quote