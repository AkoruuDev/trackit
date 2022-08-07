import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthProvider } from "./components/provider/auth";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    , document.querySelector(".root"));