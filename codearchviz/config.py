"""
项目配置文件，包含可配置的参数
"""

# 源代码路径
SOURCE_PATH = "/path/to/your/project/src"

# 语言设置
LANGUAGE = "java"  # 支持的语言: java (未来将支持更多语言)

# 语言特定配置
LANGUAGE_CONFIG = {
    "java": {
        "source_path": SOURCE_PATH,
        "file_extension": ".java",
    },
    # 未来将支持更多语言
    # "python": {
    #     "source_path": SOURCE_PATH,
    #     "file_extension": ".py",
    # },
    # "javascript": {
    #     "source_path": SOURCE_PATH,
    #     "file_extension": ".js",
    # },
}

# 输出文件路径
OUTPUT_PATH = "output"

# 可视化配置
VISUALIZATION = {
    "default_package": "com.example",
    "max_package_deep_level": 5,
    "limit_statistics": 20,
}

# Web服务器配置
SERVER = {
    "host": "localhost",
    "port": 8000,
    "debug": True,
} 