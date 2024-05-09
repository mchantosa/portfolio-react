import portfolioTailwind from "../style";
const { containerTailwind, h2Tailwind, pTailwind } =
  portfolioTailwind.projectDescriptionTailwind;
export default function ProjectDetails() {
  return (
    <div className={containerTailwind.join(" ")}>
      <h2 className={h2Tailwind.join(" ")}>About A Wordle</h2>
      <p className={pTailwind.join(" ")}>
        This was an application I made for a technical challenge that requested
        a simple demo of code that could be communicated via gist. It took me a
        day to throw together and I had a lot of fun making it. I used two
        different dictionary APIs, one to generate a random word and one for
        definitions and checking that a user entered work is valid. I use ajax
        calls with each turn to validate then update the game state.
      </p>
      <h2 className={h2Tailwind.join(" ")}>Use case</h2>
      <p className={pTailwind.join(" ")}>
        My family loves this game because the dictionaries are really really
        mean. This has become a family game we play communally when we go out
        and are waiting, usually food. The game does give you the definition in
        the end, so it can be a learning experience as well.
      </p>
    </div>
  );
}
