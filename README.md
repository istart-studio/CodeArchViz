# CodeArchViz

<div align="center">

![CodeArchViz Logo](https://via.placeholder.com/200x200?text=CodeArchViz)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.6+-blue.svg)](https://www.python.org/downloads/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**基于整洁架构的多语言代码依赖分析与可视化工具**

[English](README_EN.md) | 简体中文

</div>

## 📖 概述

CodeArchViz 是一个强大的代码架构分析与可视化工具，基于整洁架构(Clean Architecture)理念，帮助开发者理解、评估和改进项目的架构质量。通过直观的可视化界面，它能够揭示代码中的依赖关系、架构层次以及潜在的设计问题。

### 为什么选择 CodeArchViz?

- **基于整洁架构**: 不仅展示依赖，还评估它们是否符合整洁架构原则
- **多语言支持**: 设计支持多种编程语言（当前支持Java，未来将支持更多）
- **交互式可视化**: 直观展示复杂依赖关系，便于理解和分析
- **架构质量指标**: 提供客观的架构质量评估指标
- **易于集成**: 可轻松集成到CI/CD流程中

## ✨ 核心功能

### 架构分析

- **依赖关系分析**: 深入分析模块间的依赖关系
- **整洁架构评估**: 检测违反依赖规则的代码
- **架构层次识别**: 自动识别代码中的架构层次
  - 实体层 (Entities)
  - 用例层 (Use Cases)
  - 接口适配器层 (Interface Adapters)
  - 框架和驱动层 (Frameworks & Drivers)

### 可视化展示

- **全局依赖图**: 宏观展示项目的整体依赖结构
- **模块依赖图**: 分析特定模块的上下游依赖
- **包依赖结构**: 展示包级别的依赖关系
- **稳定性-抽象度(I-A)图**: 评估模块的稳定性和抽象度平衡

### 架构质量评估

- **依赖合规率**: 衡量项目对整洁架构原则的遵守程度
- **架构异味检测**: 识别潜在的架构问题
- **改进建议**: 提供具体的架构改进建议

## 🚀 快速开始

### 安装

```bash
# 通过pip安装
pip install codearchviz

# 或者从源码安装
git clone https://github.com/yourusername/CodeArchViz.git
cd CodeArchViz
pip install -e .
```

### 基本用法

1. **配置项目路径**

编辑配置文件或使用命令行参数:

```python
# config.py
SOURCE_PATH = "/path/to/your/project/src"
LANGUAGE = "java"  # 目前支持: java
```

2. **分析项目**

```bash
# 使用默认配置
codearchviz analyze

# 指定项目路径和语言
codearchviz analyze --path /path/to/project --language java
```

3. **查看可视化结果**

```bash
codearchviz serve
```

浏览器将自动打开可视化界面:

![可视化界面](https://via.placeholder.com/800x450?text=CodeArchViz+Dashboard)

## 📊 示例分析

### 依赖关系可视化

```bash
codearchviz analyze --path /path/to/example-project
codearchviz serve
```

![依赖关系图](https://via.placeholder.com/800x400?text=Dependency+Graph)

### 整洁架构评估

分析结果将显示:

- 架构层次分布
- 依赖合规率
- 违反整洁架构原则的依赖列表

## 🔍 支持的语言

目前支持:
- **Java**: 完全支持

计划支持:
- **Python**: 开发中
- **JavaScript/TypeScript**: 计划中
- **Go**: 计划中

查看支持的语言列表:

```bash
codearchviz languages
```

## 🛠️ 高级配置

编辑 `config.py` 文件进行高级配置:

```python
# 语言特定配置
LANGUAGE_CONFIG = {
    "java": {
        "source_path": SOURCE_PATH,
        "file_extension": ".java",
        # 其他Java特定配置...
    }
}

# 可视化配置
VISUALIZATION = {
    "default_package": "com.example",
    "max_package_deep_level": 5,
    "limit_statistics": 20,
}
```

## 📝 命令行参考

```bash
# 显示帮助信息
codearchviz --help

# 分析项目
codearchviz analyze --path /path/to/project --language java --output ./output

# 启动可视化服务器
codearchviz serve

# 显示支持的语言
codearchviz languages

# 显示版本信息
codearchviz version
```

## 🤝 贡献指南

我们欢迎各种形式的贡献，包括但不限于:

- 报告问题
- 提交功能请求
- 编写或改进文档
- 提交代码修复或新功能
- 添加对新编程语言的支持

详细信息请参阅[贡献指南](CONTRIBUTING.md)。

## 📄 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件。

## 📚 相关资源

- [整洁架构 (Clean Architecture)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Robert C. Martin
- [依赖倒置原则](https://martinfowler.com/articles/dipInTheWild.html) - Martin Fowler
- [软件架构的实践](https://www.oreilly.com/library/view/software-architecture-in/9780134494272/) - Len Bass, Paul Clements, Rick Kazman

---

<div align="center">
  <sub>Built with ❤️ by the CodeArchViz Team</sub>
</div> 