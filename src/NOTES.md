5 stateless components:
- NavBar
- Questions
- UserQuestions
- About
- App

3 routes
- /
- /form
- /start-game
- /about

2 container components
- FormContainer
- GameContainer
- HomeContainer


Live coding:
1. click button to sort categories
2. initial state = unsorted
3. once clicked = sorted


// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
