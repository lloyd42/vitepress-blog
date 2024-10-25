---
outline: deep
---

# Markdown Badge 使用入门

如果你打开一个热门开源的 ``GitHub`` 仓库，那么大概率就会看到很多五颜六色的 ``Badge`` 用于显示仓库的技术栈、统计、版本等等信息，看起来很酷。

下面将介绍如何获取这些以及如何自定义，来制作自己的 ``Badge``吧！

## 预制品

在这个网站 [md-badges](https://inttter.github.io/md-badges/)，你可以找到一大堆流行元素的 ``Badge`` 预制品。

例如：
[![App Store](https://img.shields.io/badge/App_Store-0D96F6?logo=app-store&logoColor=white)](https://www.apple.com/store)
[![ChatGPT](https://img.shields.io/badge/ChatGPT-74aa9c?logo=openai&logoColor=white)](https://chatgpt.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?logo=Cloudflare&logoColor=white)](https://www.cloudflare.com/)。

## 自定义

[shields.io](https://shields.io/badges) 提供简单、易用的 ``Badge`` 制作服务。

下面介绍如何制作 ``Static Badge``。

### 样式一

标签、信息和颜色用破折号分隔。例如：

[![shields.io](https://img.shields.io/badge/any_text-you_like-blue)](https://shields.io/badges)

语法：``https://img.shields.io/badge/{label}-{message}-{color}``

例子：<https://img.shields.io/badge/any_text-you_like-blue>

```md
[![shields.io](https://img.shields.io/badge/any_text-you_like-blue)](https://shields.io/badges)
```

### 样式二

只有信息和颜色，用破折号隔开。例如：

[![shields.io](https://img.shields.io/badge/just%20the%20message-8A2BE2)](https://shields.io/badges)

语法：``https://img.shields.io/badge/{message}-{color}``

例子：<https://img.shields.io/badge/just%20the%20message-8A2BE2>

```md
[![shields.io](https://img.shields.io/badge/just%20the%20message-8A2BE2)](https://shields.io/badges)
```

### 样式三

标签、信息和颜色用破折号分隔，``logo`` 定义使用 ``query`` 参数。例如：

[![Debian](https://img.shields.io/badge/Debian-debian-A81D33?logo=debian&logoColor=fff)](https://shields.io/badges)

语法：``https://img.shields.io/badge/{label}-{message}-{color}?logo={slug}&logoColor={color}``

例子：<https://img.shields.io/badge/Debian_debian-A81D33?logo=debian&logoColor=fff>

```md
[![shields.io](https://img.shields.io/badge/any_text-you_like-blue)](https://shields.io/badges)
```

## 了解更多

- <https://shields.io/badges/static-badge>
- <https://simpleicons.org/>
- <https://inttter.github.io/md-badges/>

<style module>
  p:has(a):not(:has(code)) {
    display: flex;
  }
  a:has(img) {
    margin-left: 5px;
  }
</style>
