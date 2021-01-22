import './css/App.css';
import Preview from './components/Preview';
import Controls from './components/controls/Controls';
function App() {
  return (
    <div className="App">
      <article id="introduction">
        <h1 id="title">The forge</h1>
        <p>
          The forge its a tool that you can use to create your own components to integrate into your web projects
        </p>
      </article>
      <hr/>
      <Preview/>
      <hr/>
      <Controls/>
    </div>
  );
}

export default App;
