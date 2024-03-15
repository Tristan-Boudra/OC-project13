import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/index";
import store from "./store/store";

const rootContainer = document.getElementById("app-container");

if (!rootContainer) {
  throw new Error("App container not found in the document");
}

const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
