"""
主程序入口，负责扫描源代码并生成可视化数据
"""

import json
import os
import importlib
from typing import List, Dict, Any

from codearchviz.languages import get_language_processor
from codearchviz.config import LANGUAGE, SOURCE_PATH, OUTPUT_PATH, VISUALIZATION


def analyze_project(source_path: str, language: str) -> List[Dict[str, Any]]:
    """
    分析项目，提取所有模块的信息
    
    Args:
        source_path: 源代码路径
        language: 编程语言
        
    Returns:
        所有模块的信息列表
    """
    print(f"开始分析 {language} 项目: {source_path}")
    
    # 获取对应语言的处理器
    processor = get_language_processor(language)
    
    # 使用语言处理器分析项目
    if language == 'java':
        return processor.analyze_java_project(source_path)
    else:
        # 未来支持更多语言
        raise NotImplementedError(f"尚未实现对 {language} 的支持")


def generate_visualization_data(data: List[Dict[str, Any]], output_dir: str) -> None:
    """
    生成可视化数据文件
    
    Args:
        data: 模块信息列表
        output_dir: 输出目录
    """
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 生成JSON数据
    data_json = json.dumps(data)
    
    # 保存原始JSON数据
    with open(os.path.join(output_dir, 'architecture_data.json'), 'w', encoding='utf-8') as f:
        f.write(data_json)
    
    # 生成JS数据文件
    js_data = "var data=" + data_json + ";"
    with open(os.path.join(output_dir, 'source_json_data.js'), 'w', encoding='utf-8') as f:
        f.write(js_data)
    
    # 复制到视图目录
    view_ec_path = os.path.join(os.path.dirname(__file__), 'view_ec')
    with open(os.path.join(view_ec_path, 'source_json_data.js'), 'w', encoding='utf-8') as f:
        f.write(js_data)
    
    print(f"可视化数据已生成: {output_dir}")


def main():
    """主程序入口"""
    data = analyze_project(SOURCE_PATH, LANGUAGE)
    generate_visualization_data(data, OUTPUT_PATH)
    print(f"分析完成，共处理 {len(data)} 个模块")
    print(f"可以通过运行 'python -m codearchviz.serve' 来查看可视化结果")


if __name__ == "__main__":
    main() 