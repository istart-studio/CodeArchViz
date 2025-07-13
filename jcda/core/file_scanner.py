"""
文件扫描器模块，负责扫描Java源代码文件
"""

import os
from typing import List


def get_files(directory: str, suffix: str) -> List[str]:
    """
    获取指定目录下所有指定后缀的文件
    
    Args:
        directory: 目标目录
        suffix: 文件后缀，例如 '.java'
        
    Returns:
        符合条件的文件路径列表
    """
    result = []
    for root, _, files in os.walk(directory):
        for filename in files:
            name, suf = os.path.splitext(filename)
            if suf == suffix:
                result.append(os.path.join(root, filename))
    return result


def get_java_files(directory: str) -> List[str]:
    """
    获取指定目录下所有Java文件
    
    Args:
        directory: 目标目录
        
    Returns:
        所有Java文件的路径列表
    """
    return get_files(directory, '.java') 