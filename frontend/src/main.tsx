import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./assets/styles/index.scss";
import MyThemeProvider from "./app/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <MyThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MyThemeProvider>
);
