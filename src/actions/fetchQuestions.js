export function fetchQuestions() {
    fetch('http://localhost:3040/api/v1/questions')
    .then(response => response.json())
    .then(data => console.log(data))
}