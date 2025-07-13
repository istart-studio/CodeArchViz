"""
可视化工具模块，负责生成可视化数据
"""

import os
import json
from typing import List, Dict, Any


def generate_visualization_data(data: List[Dict[str, Any]], output_dir: str) -> None:
    """
    生成可视化数据文件
    
    Args:
        data: Java类信息列表
        output_dir: 输出目录
    """
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 生成JSON数据
    json_data = json.dumps(data)
    
    # 保存原始JSON数据
    with open(os.path.join(output_dir, 'java_fan_in_fan_out.json'), 'w', encoding='utf-8') as f:
        f.write(json_data)
    
    # 生成JS数据文件
    js_data = "var data=" + json_data + ";"
    with open(os.path.join(output_dir, 'source_json_data.js'), 'w', encoding='utf-8') as f:
        f.write(js_data)


def copy_visualization_assets(output_dir: str, package_dir: str) -> None:
    """
    复制可视化资源文件
    
    Args:
        output_dir: 输出目录
        package_dir: 包目录
    """
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 复制视图相关文件
    view_ec_path = os.path.join(package_dir, 'view_ec')
    
    # 复制JS文件
    js_dir = os.path.join(output_dir, 'js')
    os.makedirs(js_dir, exist_ok=True)
    
    for js_file in os.listdir(os.path.join(view_ec_path, 'js')):
        src_path = os.path.join(view_ec_path, 'js', js_file)
        dst_path = os.path.join(js_dir, js_file)
        with open(src_path, 'rb') as src, open(dst_path, 'wb') as dst:
            dst.write(src.read())
    
    # 复制CSS文件
    css_dir = os.path.join(output_dir, 'css')
    os.makedirs(css_dir, exist_ok=True)
    
    for css_file in os.listdir(os.path.join(view_ec_path, 'css')):
        src_path = os.path.join(view_ec_path, 'css', css_file)
        dst_path = os.path.join(css_dir, css_file)
        with open(src_path, 'rb') as src, open(dst_path, 'wb') as dst:
            dst.write(src.read())
    
    # 复制HTML文件
    with open(os.path.join(view_ec_path, 'index.html'), 'rb') as src, \
         open(os.path.join(output_dir, 'index.html'), 'wb') as dst:
        dst.write(src.read())
    
    # 复制JS渲染文件
    for js_file in os.listdir(view_ec_path):
        if js_file.endswith('.js'):
            src_path = os.path.join(view_ec_path, js_file)
            dst_path = os.path.join(output_dir, js_file)
            with open(src_path, 'rb') as src, open(dst_path, 'wb') as dst:
                dst.write(src.read()) 