import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <h1>initial react-http</h1>
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
// making a GET request using axios and rendering the fetched data in a react component
