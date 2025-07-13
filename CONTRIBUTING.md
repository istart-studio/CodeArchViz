# 贡献指南

感谢您对CodeArchViz的关注！我们欢迎各种形式的贡献，包括但不限于：

- 报告问题
- 提交功能请求
- 编写或改进文档
- 提交代码修复或新功能
- 添加对新编程语言的支持

## 开发环境设置

1. Fork本仓库
2. 克隆您的fork到本地
```bash
git clone https://github.com/YOUR_USERNAME/CodeArchViz.git
```
3. 添加上游仓库
```bash
git remote add upstream https://github.com/original-owner/CodeArchViz.git
```
4. 创建新分支
```bash
git checkout -b feature/your-feature-name
```

## 代码规范

- 遵循PEP 8 Python代码风格指南
- 为所有新功能编写测试
- 保持代码简洁清晰
- 使用有意义的提交消息
- 添加适当的文档注释

## 添加新语言支持

如果您想为CodeArchViz添加对新编程语言的支持，请遵循以下步骤：

1. 在`codearchviz/languages/`目录下创建新的语言模块
2. 实现必要的解析器和分析器
3. 添加相应的测试用例
4. 更新配置和文档

## 提交流程

1. 确保您的代码通过所有测试
```bash
pytest
```
2. 提交您的更改
```bash
git commit -m "简明扼要的提交消息"
```
3. 推送到您的fork
```bash
git push origin feature/your-feature-name
```
4. 创建Pull Request到主仓库的`main`分支

## Pull Request指南

- 清晰描述您的更改解决了什么问题
- 如果适用，包含相关的问题编号
- 确保CI通过所有测试
- 代码审查后可能需要进行修改

## 问题报告

报告问题时，请包含：

- 清晰的问题描述
- 重现步骤
- 预期行为与实际行为
- 环境信息（操作系统、Python版本等）
- 如可能，提供最小可重现示例

## 行为准则

- 尊重所有贡献者
- 接受建设性批评
- 专注于最佳解决方案
- 对社区保持友善和包容

再次感谢您的贡献！ 