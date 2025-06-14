export default function Result({score, totalitems}){

  function handleOkay(){
    window.location.reload();
  }

  return (
  <div className="result-container">
    <div className="result-card">
      <h1>Result</h1>
      <p>Congratulations Boi nice ka</p>
      <h2>Your score is {score} out of {totalitems}</h2>
      <button 
        className="okay-btn"
        onClick={()=> handleOkay()}>Okay</button>
    </div>
  </div>)
}