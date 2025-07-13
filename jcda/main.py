"""
主程序入口，负责扫描Java源代码并生成可视化数据
"""

import json
import os
from typing import List, Dict, Any

from jcda.core.file_scanner import get_java_files
from jcda.core.source_analyzer import load_source_file
from jcda.config import JAVA_SOURCE_PATH, OUTPUT_PATH, VISUALIZATION


def analyze_java_project(source_path: str) -> List[Dict[str, Any]]:
    """
    分析Java项目，提取所有类的信息
    
    Args:
        source_path: Java源代码路径
        
    Returns:
        所有Java类的信息列表
    """
    print(f"开始扫描Java源代码: {source_path}")
    source_files = get_java_files(source_path)
    print(f"找到 {len(source_files)} 个Java文件")
    
    cards = []
    
    for source_file in source_files:
        cards.append(load_source_file(source_file))
    
    return cards


def generate_visualization_data(cards: List[Dict[str, Any]], output_dir: str) -> None:
    """
    生成可视化数据文件
    
    Args:
        cards: Java类信息列表
        output_dir: 输出目录
    """
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 生成JSON数据
    cards_json = json.dumps(cards)
    
    # 保存原始JSON数据
    with open(os.path.join(output_dir, 'java_fan_in_fan_out.json'), 'w', encoding='utf-8') as f:
        f.write(cards_json)
    
    # 生成JS数据文件
    js_data = "var data=" + cards_json + ";"
    with open(os.path.join(output_dir, 'source_json_data.js'), 'w', encoding='utf-8') as f:
        f.write(js_data)
    
    # 复制到视图目录
    view_ec_path = os.path.join(os.path.dirname(__file__), 'view_ec')
    with open(os.path.join(view_ec_path, 'source_json_data.js'), 'w', encoding='utf-8') as f:
        f.write(js_data)
    
    print(f"可视化数据已生成: {output_dir}")


def main():
    """主程序入口"""
    cards = analyze_java_project(JAVA_SOURCE_PATH)
    generate_visualization_data(cards, OUTPUT_PATH)
    print(f"分析完成，共处理 {len(cards)} 个Java类")
    print(f"可以通过运行 'python -m jcda.serve' 来查看可视化结果")


if __name__ == "__main__":
    main() 