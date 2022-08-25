
import Joke from "../src/Joke"
import JokesData from "./jokesData";
function App() {
  const jokeElements = JokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}  />
  })
  return (
    <div>
        {jokeElements}
    </div>
  )
}

export default App;

