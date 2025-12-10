const skills = ["Learner", "Stealer", "Developer"];

const h1E = document.querySelector("h1");

let skillsIndex = 0, letterIndex = 0;

updateIndex();

function updateIndex() {
  console.log(`I am ${skills[skillsIndex].slice(0, letterIndex)}`);
  h1E.innerHTML = `I am ${skills[skillsIndex].slice(0, letterIndex)}`;
  if ( letterIndex === skills[skillsIndex].length ) {
    skillsIndex++;
    letterIndex = 0;
    if (skillsIndex >= 3) {
      skillsIndex = 0;
    }
  }else {
    letterIndex++;
  }
  setTimeout(updateIndex, 200);
}