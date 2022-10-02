import Form from "./components/Form";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="flex flex-col h-screen lg:flex-row ">
      <Form />
      <Main />
    </div>
  );
};

// https://images-api.nasa.gov/search?q=apollo&media_type=image

export default App;
