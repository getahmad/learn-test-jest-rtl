import "./App.css";
import CompAxiosCall from "./materi/CompAxiosCall/CompAxiosCall";
import CompRole from "./materi/CompRole/CompRole";
import CompUserEvent from "./materi/CompUserEvent/CompUserEvent";
import CompVariant from "./materi/CompVariant/CompVariant";
import SimpleShowHide from "./materi/FireEvent/SimpleShowHide";
import SampleComponent from "./materi/SampleComponent/SampleComponent";

function App() {
  return (
    <>
      <SampleComponent />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
