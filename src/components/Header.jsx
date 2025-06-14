import headerLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img className="header-logotext-center my-2 mx-auto" src={headerLogo} alt="Note image" />
      <h1>React Quiz</h1>
    </header>
  );
}