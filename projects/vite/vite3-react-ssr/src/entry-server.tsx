// entry-server.ts
// 导出 SSR 组件入口
import App from "./App";
import "./index.css";


function ServerEntry(props: { data: Window['__SSR_DATA__'] }) {
  return <App data={props.data} />;
}

async function fetchData() {
  return { user: "lorain", date: `2022年10月08日23:20:12` };
}

export { ServerEntry, fetchData };
