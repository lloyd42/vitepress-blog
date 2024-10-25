# Deno 2.0 尝鲜

[Deno 2.0](https://deno.com/blog/v2.0) 发布啦！🎉🎉🎉

自 ``Deno 1.0`` 发布以来，社区生态似乎一直不温不火，还让后来的 ``Bun`` 抢了风头，``Node`` 地位几乎不可撼动，在新老对手前后夹击的压力下，``Deno`` 给出了自己的回应。

## 新 Deno 有啥

- 向后兼容 Node.js 和 npm，允许您无缝运行现有的 Node 应用程序

为了 ``Deno`` 能够被更多人使用，开发团队也是拼了，``Node`` 生态还是太强了啊。。。这算是无奈之举吗？

- 使用新的 ``deno install`` 、``deno add`` 和 ``deno remove`` 命令进行包管理

这下算是该有的都有了，对比 ``Node`` 和 ``Bun`` 一点也不差，重拳出击

- [JSR](https://jsr.io/)：用于跨运行时共享 ``JavaScript`` 库的现代注册表

``JSR`` 也是 ``Deno`` 团队自己搞的平台，在前段时间就发布了，对比 ``NPM`` 支持更广更现代化，不过还是需要用户积累，生态问题老大难😓

当然这次大版本更新的内容远不止上面介绍的这些，想了解更多请访问[官网](https://deno.com/)。

## 开发体验

Deno 支持了 ``Workspace`` 和 ``Monorepo``，对比传统 ``NPM`` 创建的项目一堆配置文件，看到就头大，``Deno`` 项目结构却十分精简。

现在创建一个新的 deno 2.0 项目看看。

首先安装 ``Deno`` 环境：

```sh
# PowerShell (Windows)
irm https://deno.land/install.ps1 | iex
```

or

```sh
# MacOS
curl -fsSL https://deno.land/install.sh | sh
```

使用 ``Deno`` 命令创建新项目：

```sh
deno init my_project
```

创建的新项目结构如下：

```text
my_project
├── deno.json
├── main_test.ts
└── main.ts
```

实践新的 ``Workspace`` 和 ``Monorepo``，添加文件并配置，完成后结构如下：

```text
my_project
├── apps
│   ├── api
│   │   ├── deno.json
│   │   ├── main.ts
│   │   └── main_test.ts
│   └── web
│       ├── deno.json
│       ├── index.html
│       ├── public
│       ├── src
│       └── vite.config.ts
├── deno.json
├── deno.lock
└── packages
    └── utils
        ├── deno.json
        ├── main.ts
        └── main_test.ts
```

在根目录的 ``deno.json`` 文件中定义 ``workspace`` 字段用于识别需要管理的子项目：

```json
{
  "tasks": {
    "api:dev": "cd ./apps/api && deno task dev",
    "web:dev": "cd ./apps/web && deno task dev"
  },
  "imports": {
    "@std/assert": "jsr:@std/assert@1"
  },
  "workspace": ["./apps/api", "./apps/web", "./packages/utils"],
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable", "deno.ns"],
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "jsxImportSourceTypes": "@types/react"
  }
}
```

配置 ``exports`` 用于子项目间的相互引用，例如：

```ts
// packages/utils/main.ts
export function add(a: number, b: number): number {
  return a + b;
}
```

导出 ``@mono/utils`` 子项目的方法给其他子项目使用。

```json
{
  "name": "@mono/utils",
  "tasks": {
    "dev": "deno run --watch main.ts"
  },
  "imports": {
    "@std/assert": "jsr:@std/assert@1"
  },
  "exports": {
    ".": "./main.ts"
  }
}
```

其它子包调用。

```ts
// apps/api/main.ts
import { add } from "@mono/utils";
console.log("1 + 2 =", add(1, 2));
```

然后运行，结果：

```sh
> deno run main.ts
1 + 2 = 3
```

在 ``Deno`` 项目中如何使用 ``NPM`` 、``JSR`` 的包呢？很简单，看看下面：

```json
{
  "name": "@mono/api",
  "version": "0.0.1",
  "exports": "./main.ts",
  "imports": {
    "hono": "npm:hono@^4.6.5",
    "@std/assert": "jsr:@std/assert@1",
  }
}
```

完整的项目例子请访问：<https://github.com/lloyd42/monorepo-deno>

## 总结

一个简单项目体验下来，最大的感触就是，``Deno`` 项目开发起来太清爽了，全流程开发一气呵成，没有配置文件的烦恼。

但目前刚发布，截止到目前为止，发布了两个小版本修复，版号来到 ``2.0.2``。确实还是有部分问题存在，光是我体验的时候就遇到了比如莫名的红字报错，一些包的兼容等等问题，不过我觉得 ``Deno 2`` 有了一个好的开始，接下来就期待开发团队的持续优化啦。
