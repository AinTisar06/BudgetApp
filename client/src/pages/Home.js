import { React } from "react";
import Script from "../components/Script";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is my site. Take a look</p>
      <p>This is my site. Take a look</p>
      <Script isAdmin = {false} info = "There are the details" />
    </div>
  );
}
