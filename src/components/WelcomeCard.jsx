

export default function WelcomeCard({name}){
  return (
    <div className="welcomecard-wrapper">
      <div className="welcomecard">
        <h1>Hi there {name}</h1>
        <h2>Test your React knowledge</h2>
        <input type="text" placeholder="Enter your name" />
        <button>Name</button>
      </div>
    </div>
  )
}