import './css/App.css';
import Preview from './components/Preview';
import Controls from './components/controls/Controls';
function App() {
  return (
    <div className="App">
      <article id="introduction">
        <h1 id="title">The forge</h1>
        <p>
          The forge its a CSS component builder that makes easier create UI components for webapps specially for non-developers users. Minimal CSS knowledge is required.
        </p>
      </article>
      <hr/>
      <div id="preview-wrapper">
        <Preview/>
      </div>
      <hr/>
      <Controls/>
    </div>
  );
}

export default App;
