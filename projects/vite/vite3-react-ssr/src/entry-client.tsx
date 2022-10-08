// entry-client.ts
// 客户端入口文件
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// @ts-ignore
const data = window.__SSR_DATA__;

ReactDOM.hydrateRoot(
  document.getElementById("app") as unknown as Document,
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
