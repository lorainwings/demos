# module-federation

vite 中使用模块联邦的示例应用

## host

本地应用文件夹为 `host`

## remote

远端应用文件夹为 `remote`

下面是模拟部署命令

```sh
# 打包产物
pnpm run build
# 模拟部署效果，一般会在生产环境将产物上传到 CDN
npx vite preview --port=3001 --strictPort
```

## 整体使用流程

在模块联邦中的配置中，`exposes` 和 `remotes` 参数其实并不冲突，也就是说一个模块既可以作为本地模块，又可以作为远程模块。
由于 `Vite` 的插件机制与 `Rollup` 兼容，`vite-plugin-federation` 方案在 Rollup 中也是完全可以使用的。

整体的配置流程:

- 远程模块通过 `exposes` 注册导出的模块，本地模块通过 `remotes` 注册远程模块地址。
- 远程模块进行构建，并部署到云端。
- 本地通过 `import '远程模块名称/xxx'`的方式来引入远程模块，实现运行时加载。

## 调试准备

### 启动服务

首先启动 host 及 remote 两个项目, 使用浏览器端口打开该 2 个项目, 此处使用命令打开 chrome canary

```sh
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --auto-open-devtools-for-tabs  --remote-debugging-port=9222 --pinned-tab-count=2 http://localhost:3000 http://localhost:3001
```

### 修改 debug 调试配置

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      // 可以调试多个项目, 先自己在浏览器打开相应的页面
      "type": "chrome",
      "request": "attach",
      "name": "Vite 模块联邦",
      "port": 9222,
      "webRoot": "${workspaceFolder}/projects/module-federation/",
      "sourceMapPathOverrides": {
        "webpack:///./*": "${webRoot}/*",
        "webpack:///src/*": "${webRoot}/*",
        "webpack:///./src/*": "${webRoot}/*",
        "webpack:///*": "*",
        "webpack:///./~/*": "${webRoot}/node_modules/*"
      }
    }
  ]
}
```

## 调试源码

首先本地应用 host 的编译后代码如下

```js
import { injectQuery as __vite__injectQuery } from "/@vite/client";
const remotesMap = {
  remote_app: {
    url: "http://localhost:3001/assets/remoteEntry.js",
    format: "esm",
    from: "vite",
  },
};
const loadJS = async (url, fn) => {
  const resolvedUrl = typeof url === "function" ? await url() : url;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = fn;
  script.src = resolvedUrl;
  document.getElementsByTagName("head")[0].appendChild(script);
};
const scriptTypes = ["var"];
const importTypes = ["esm", "systemjs"];
function get(name, remoteFrom) {
  return import(/* @vite-ignore */ __vite__injectQuery(name, "import")).then(
    (module) => () => {
      if (remoteFrom === "webpack") {
        return Object.prototype.toString.call(module).indexOf("Module") > -1 &&
          module.default
          ? module.default
          : module;
      }
      return module;
    }
  );
}
const wrapShareScope = (remoteFrom) => {
  return {
    vue: {
      undefined: {
        get: () =>
          get(
            "http://localhost:3000/node_modules/.vite/deps/vue.js?v=30f3c243",
            remoteFrom
          ),
      },
    },
  };
};
const initMap = Object.create(null);
async function __federation_method_ensure(remoteId) {
  const remote = remotesMap[remoteId];
  if (!remote.inited) {
    if (scriptTypes.includes(remote.format)) {
      // loading js with script tag
      return new Promise((resolve) => {
        const callback = () => {
          if (!remote.inited) {
            remote.lib = window[remoteId];
            remote.lib.init(wrapShareScope(remote.from));
            remote.inited = true;
          }
          resolve(remote.lib);
        };
        return loadJS(remote.url, callback);
      });
    } else if (importTypes.includes(remote.format)) {
      // loading js with import(...)
      return new Promise((resolve) => {
        const getUrl =
          typeof remote.url === "function"
            ? remote.url
            : () => Promise.resolve(remote.url);
        getUrl().then((url) => {
          import(/* @vite-ignore */ __vite__injectQuery(url, "import")).then(
            (lib) => {
              if (!remote.inited) {
                const shareScope = wrapShareScope(remote.from);
                lib.init(shareScope);
                remote.lib = lib;
                remote.lib.init(shareScope);
                remote.inited = true;
              }
              resolve(remote.lib);
            }
          );
        });
      });
    }
  } else {
    return remote.lib;
  }
}

function __federation_method_unwrapDefault(module) {
  return module?.__esModule ? module["default"] : module;
}

function __federation_method_wrapDefault(module, need) {
  if (!module?.default && need) {
    let obj = Object.create(null);
    obj.default = module;
    obj.__esModule = true;
    return obj;
  }
  return module;
}

function __federation_method_getRemote(remoteName, componentName) {
  return __federation_method_ensure(remoteName).then((remote) =>
    remote.get(componentName).then((factory) => factory())
  );
}
export {
  __federation_method_ensure,
  __federation_method_getRemote,
  __federation_method_unwrapDefault,
  __federation_method_wrapDefault,
};
```

源码中使用`import RemoteApp from "remote_app/App"`, 将调用`__federation_method_getRemote`该运行时方法来获取远程模块的入口

`__federation_method_getRemote`参数分别为`remote_app`和`App`, 通过`__federation_method_ensure`方法读取 remoteMap 中的 remoteName(此处为 remote_app)

```js
const remote = remotesMap[remoteId];
```

通过判断不同的模块类型及是否已加载, 调用不同的加载方式

首次加载调用 getUrl(), 后返回动态加载的模块

```js
import(/* @vite-ignore */ __vite__injectQuery(name, "import"));
// 即加载
import("http://localhost:3001/assets/remoteEntry.js");
```

加载完进行容器的初始化, 主要逻辑是将共享依赖信息传递给远程模块的运行时容器

```js
lib.init(shareScope);
```

对应的远程模块源码如下, 这也是远端运行时容器入口, `提供了dynamicLoadingCss`, `get`, `init`三个方法

- get: 让本地模块能够通过调用这个方法来访问到该远程模块

```js
import { _ as __vitePreload } from "./preload-helper.1c052cf7.js";

let moduleMap = {
  "./Button": () => {
    dynamicLoadingCss(["__federation_expose_Button.64ae968c.css"]);
    return __federation_import("./__federation_expose_Button.js").then(
      (module) => () => module?.default ?? module
    );
  },
  "./App": () => {
    dynamicLoadingCss(["__federation_expose_App.f59b882d.css"]);
    return __federation_import("./__federation_expose_App.js").then(
      (module) => () => module?.default ?? module
    );
  },
  "./utils": () => {
    dynamicLoadingCss([]);
    return __federation_import("./__federation_expose_Utils.js").then(
      (module) => () => module?.default ?? module
    );
  },
};
const seen = {};
const dynamicLoadingCss = (cssFilePaths) => {
  const metaUrl = import.meta.url;
  if (typeof metaUrl == "undefined") {
    console.warn(
      'The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".'
    );
    return;
  }
  const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf("remoteEntry.js"));

  cssFilePaths.forEach((cssFilePath) => {
    const href = curUrl + cssFilePath;
    if (href in seen) return;
    seen[href] = true;
    const element = document.head.appendChild(document.createElement("link"));
    element.href = href;
    element.rel = "stylesheet";
  });
};
async function __federation_import(name) {
  return __vitePreload(() => import(name), true ? [] : void 0);
}
const get = (module) => {
  return moduleMap[module]();
};
const init = (shareScope) => {
  globalThis.__federation_shared__ = globalThis.__federation_shared__ || {};
  Object.entries(shareScope).forEach(([key, value]) => {
    const versionKey = Object.keys(value)[0];
    const versionValue = Object.values(value)[0];
    const scope = versionValue.scope || "default";
    globalThis.__federation_shared__[scope] =
      globalThis.__federation_shared__[scope] || {};
    const shared = globalThis.__federation_shared__[scope];
    (shared[key] = shared[key] || {})[versionKey] = versionValue;
  });
};

export { dynamicLoadingCss, get, init };
//# sourceMappingURL=remoteEntry.js.map
```

调用 init 后给全局 globalThis(浏览器中的 window)设置了共享模块的地址

本地模块设置了 shared: ['vue']参数之后，当它执行远程模块代码的时候，一旦遇到了引入 vue 的情况，会优先使用本地的 vue，而不是远端模块中的 vue

```js
globalThis.__federation_shared__ = {
  default: {
    vue: {
      undefined: {
        get: () =>
          get(
            "http://localhost:3000/node_modules/.vite/deps/vue.js?v=30f3c243",
            remoteFrom
          ),
      },
    },
  },
};
```

共享模块处理完成后, 通过 promise 返回了远程模块运行时加载器, 也就是上面那个 remoteEntry.js 的导出内容

后续就可以使用 remote.get 来获取远程的模块

```js
__federation_method_ensure(remoteName).then((remote) =>
  remote.get(componentName).then((factory) => factory())
);
```

remote.get 返回了 moduleMap 中已经注册的远程模块, 是一个可执行函数

```js
"./App":()=>{
  dynamicLoadingCss(["__federation_expose_App.f59b882d.css"]);
  return __federation_import('./__federation_expose_App.js').then(module=>()=>module?.default??module)
}
```

此处 dynamicLoadingCss 动态加载 css, 主要是在 dom 中插入样式表

```js
cssFilePaths.forEach((cssFilePath) => {
  const href = curUrl + cssFilePath;
  if (href in seen) return;
  seen[href] = true;
  const element = document.head.appendChild(document.createElement("link"));
  element.href = href;
  element.rel = "stylesheet";
});
```

`__federation_import`中是使用`__vitePreload(() => import(name),true?[]:void 0);`来处理预加载

源码如下:

```js
const __vitePreload = function preload(baseModule, deps) {
  // @ts-ignore
  if (!__VITE_IS_MODERN__ || !deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(
    deps.map((dep) => {
      // @ts-ignore
      dep = `${base}${dep}`;
      // @ts-ignore
      if (dep in seen) return;
      // @ts-ignore
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      // @ts-ignore check if the file is already preloaded by SSR markup
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      // @ts-ignore
      const link = document.createElement("link");
      // @ts-ignore
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      // @ts-ignore
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () =>
            rej(new Error(`Unable to preload CSS for ${dep}`))
          );
        });
      }
    })
  ).then(() => baseModule());
};
```

至此, 一个远端模块已经加载完毕
