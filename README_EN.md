# CodeArchViz

<div align="center">

![CodeArchViz Logo](https://via.placeholder.com/200x200?text=CodeArchViz)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.6+-blue.svg)](https://www.python.org/downloads/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Multi-language Code Architecture Analysis and Visualization Tool Based on Clean Architecture**

English | [简体中文](README.md)

</div>

## 📖 Overview

CodeArchViz is a powerful code architecture analysis and visualization tool based on Clean Architecture principles, helping developers understand, evaluate, and improve the architectural quality of their projects. Through an intuitive visualization interface, it reveals code dependencies, architectural layers, and potential design issues.

### Why Choose CodeArchViz?

- **Clean Architecture Based**: Not only shows dependencies but evaluates whether they comply with Clean Architecture principles
- **Multi-language Support**: Designed to support multiple programming languages (currently Java, more to come)
- **Interactive Visualization**: Intuitively displays complex dependency relationships for better understanding
- **Architecture Quality Metrics**: Provides objective architectural quality assessment metrics
- **Easy Integration**: Can be easily integrated into CI/CD workflows

## ✨ Core Features

### Architecture Analysis

- **Dependency Analysis**: In-depth analysis of dependencies between modules
- **Clean Architecture Evaluation**: Detection of code that violates dependency rules
- **Architecture Layer Identification**: Automatically identifies architectural layers in code
  - Entities Layer
  - Use Cases Layer
  - Interface Adapters Layer
  - Frameworks & Drivers Layer

### Visualization

- **Global Dependency Graph**: Macro view of the project's overall dependency structure
- **Module Dependency Graph**: Analysis of upstream and downstream dependencies for specific modules
- **Package Dependency Structure**: Visualization of package-level dependencies
- **Instability-Abstractness (I-A) Graph**: Evaluation of module stability and abstractness balance

### Architecture Quality Assessment

- **Dependency Compliance Rate**: Measures how well the project adheres to Clean Architecture principles
- **Architecture Smell Detection**: Identifies potential architectural issues
- **Improvement Suggestions**: Provides specific architectural improvement recommendations

## 🚀 Quick Start

### Installation

```bash
# Install via pip
pip install codearchviz

# Or install from source
git clone https://github.com/yourusername/CodeArchViz.git
cd CodeArchViz
pip install -e .
```

### Basic Usage

1. **Configure Project Path**

Edit the configuration file or use command line parameters:

```python
# config.py
SOURCE_PATH = "/path/to/your/project/src"
LANGUAGE = "java"  # Currently supported: java
```

2. **Analyze Project**

```bash
# Using default configuration
codearchviz analyze

# Specify project path and language
codearchviz analyze --path /path/to/project --language java
```

3. **View Visualization Results**

```bash
codearchviz serve
```

The browser will automatically open the visualization interface:

![Visualization Interface](https://via.placeholder.com/800x450?text=CodeArchViz+Dashboard)

## 📊 Example Analysis

### Dependency Visualization

```bash
codearchviz analyze --path /path/to/example-project
codearchviz serve
```

![Dependency Graph](https://via.placeholder.com/800x400?text=Dependency+Graph)

### Clean Architecture Assessment

The analysis results will display:

- Architecture layer distribution
- Dependency compliance rate
- List of dependencies that violate Clean Architecture principles

## 🔍 Supported Languages

Currently supported:
- **Java**: Fully supported

Planned support:
- **Python**: In development
- **JavaScript/TypeScript**: Planned
- **Go**: Planned

View the list of supported languages:

```bash
codearchviz languages
```

## 🛠️ Advanced Configuration

Edit the `config.py` file for advanced configuration:

```python
# Language-specific configuration
LANGUAGE_CONFIG = {
    "java": {
        "source_path": SOURCE_PATH,
        "file_extension": ".java",
        # Other Java-specific configurations...
    }
}

# Visualization configuration
VISUALIZATION = {
    "default_package": "com.example",
    "max_package_deep_level": 5,
    "limit_statistics": 20,
}
```

## 📝 Command Line Reference

```bash
# Display help information
codearchviz --help

# Analyze project
codearchviz analyze --path /path/to/project --language java --output ./output

# Start visualization server
codearchviz serve

# Display supported languages
codearchviz languages

# Display version information
codearchviz version
```

## 🤝 Contributing

We welcome all forms of contributions, including but not limited to:

- Reporting issues
- Submitting feature requests
- Writing or improving documentation
- Submitting code fixes or new features
- Adding support for new programming languages

See [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Related Resources

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Robert C. Martin
- [Dependency Inversion Principle](https://martinfowler.com/articles/dipInTheWild.html) - Martin Fowler
- [Software Architecture in Practice](https://www.oreilly.com/library/view/software-architecture-in/9780134494272/) - Len Bass, Paul Clements, Rick Kazman

---

<div align="center">
  <sub>Built with ❤️ by the CodeArchViz Team</sub>
</div> 