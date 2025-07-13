"""
语言支持模块，包含各种编程语言的解析器和分析器
"""

# 语言处理器注册表
LANGUAGE_PROCESSORS = {
    'java': 'codearchviz.languages.java.processor',
    # 未来将支持更多语言
    # 'python': 'codearchviz.languages.python.processor',
    # 'javascript': 'codearchviz.languages.javascript.processor',
    # 'go': 'codearchviz.languages.go.processor',
}


def get_language_processor(language):
    """
    获取指定语言的处理器
    
    Args:
        language: 语言名称，如'java'、'python'等
        
    Returns:
        语言处理器模块
    
    Raises:
        ImportError: 如果指定语言不受支持
    """
    if language not in LANGUAGE_PROCESSORS:
        raise ImportError(f"不支持的语言: {language}")
    
    processor_path = LANGUAGE_PROCESSORS[language]
    return __import__(processor_path, fromlist=['*']) 