import "./styles.css";
import LoginForm from "./Components/LoginForm";
// import { store, persistor } from "./store";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  const handleOverlay = () => {
    document.querySelector(".overlay").style.display = "none";
  };
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <div className="App">
        <div onClick={() => {}} className="overlay">
          <LoginForm />
        </div>
        <div className="overlayText">Overlay Text</div>
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}
