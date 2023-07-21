import { createRoot } from "react-dom/client"
import App from "./components/app"
import axios from "axios";
import { API_SERVER_URL } from "./server/config"

const container = document.getElementById("app")
const root = createRoot(container)

axios.get(`${API_SERVER_URL}/contests`)

root.render(<App />)