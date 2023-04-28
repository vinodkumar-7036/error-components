import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <ComponentA />
      <ComponentB />
    </ErrorBoundary>
  );
}

export default App;
