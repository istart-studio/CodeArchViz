# CodeArchViz (代码架构可视化工具)

一个强大的多语言代码架构分析与可视化工具，基于整洁架构(Clean Architecture)理念，帮助开发者理解、评估和改进项目的架构质量。

## 核心理念

- 基于整洁架构原则分析代码依赖关系
- 可视化展示架构层次和依赖流向
- 识别架构异味和违反依赖规则的代码
- 支持多种编程语言和项目类型
- 提供直观的架构质量指标

## 当前功能

- 分析Java代码依赖关系
- 可视化展示类之间的引用和被引用关系
- 计算并展示包的稳定性(I)和抽象度(A)指标
- 识别违反整洁架构依赖规则的代码
- 提供交互式架构探索界面

## 未来规划

- 支持更多编程语言(Python, JavaScript, Go等)
- 集成更多架构评估指标和最佳实践
- 提供架构改进建议
- 支持团队协作和架构演进追踪
- 与CI/CD流程集成，实现架构质量门禁

## 安装

### 前提条件

- Python 3.6+
- 现代浏览器（支持HTML5和JavaScript）

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/CodeArchViz.git
cd CodeArchViz
```

2. 安装依赖
```bash
pip install -r requirements.txt
```

## 使用方法

1. 配置要分析的项目路径

编辑`config.py`文件，设置源代码路径：
```python
SOURCE_PATH = "/path/to/your/project/src"
```

2. 运行分析器
```bash
python -m codearchviz.cli analyze
```

3. 在浏览器中查看结果
```bash
# 自动打开默认浏览器查看结果
python -m codearchviz.cli serve
```

## 可视化界面

分析结果将以多种图表形式展示：

- **全局依赖图**：展示所有模块之间的依赖关系
- **单个模块的引用和依赖图**：查看特定模块的上下游依赖
- **包依赖结构**：展示包级别的依赖关系
- **包内引用统计**：统计包内模块的引用情况
- **(I,A)图**：分析代码的稳定性和抽象度，验证整洁架构原则

## 贡献指南

欢迎贡献代码、报告问题或提出改进建议。请参阅[贡献指南](CONTRIBUTING.md)了解更多信息。

## 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件。 