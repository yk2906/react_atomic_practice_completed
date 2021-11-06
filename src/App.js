import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ああああ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "080-1111-1111",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
