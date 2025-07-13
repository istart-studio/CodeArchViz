"""
统计工具模块，负责生成统计数据
"""

from typing import List, Dict, Any
from collections import Counter


def count_class_types(data: List[Dict[str, Any]]) -> Dict[str, int]:
    """
    统计不同类型的数量
    
    Args:
        data: Java类信息列表
        
    Returns:
        类型统计结果
    """
    type_counter = Counter()
    
    for item in data:
        type_counter[item['type']] += 1
    
    return dict(type_counter)


def count_package_classes(data: List[Dict[str, Any]]) -> Dict[str, int]:
    """
    统计每个包中的类数量
    
    Args:
        data: Java类信息列表
        
    Returns:
        包统计结果
    """
    package_counter = Counter()
    
    for item in data:
        package_counter[item['package']] += 1
    
    return dict(package_counter)


def calculate_package_metrics(data: List[Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
    """
    计算包级别的指标
    
    Args:
        data: Java类信息列表
        
    Returns:
        包指标结果
    """
    # 初始化包数据
    packages = {}
    
    # 遍历所有类
    for item in data:
        package_name = item['package']
        
        # 如果包不存在，则创建
        if package_name not in packages:
            packages[package_name] = {
                'name': package_name,
                'class_count': 0,
                'abstract_count': 0,
                'interface_count': 0,
                'concrete_count': 0,
                'imports': set(),
                'imported_by': set()
            }
        
        # 更新计数
        packages[package_name]['class_count'] += 1
        
        # 根据类型更新计数
        if item['type'] == 'abstract class':
            packages[package_name]['abstract_count'] += 1
        elif item['type'] == 'interface':
            packages[package_name]['interface_count'] += 1
        else:
            packages[package_name]['concrete_count'] += 1
        
        # 处理导入
        for import_item in item['imports']:
            # 提取包名
            import_parts = import_item.split('.')
            if len(import_parts) > 1:
                import_package = '.'.join(import_parts[:-1])
                
                # 添加到当前包的导入
                packages[package_name]['imports'].add(import_package)
                
                # 如果导入的包不存在，则创建
                if import_package not in packages:
                    packages[import_package] = {
                        'name': import_package,
                        'class_count': 0,
                        'abstract_count': 0,
                        'interface_count': 0,
                        'concrete_count': 0,
                        'imports': set(),
                        'imported_by': set()
                    }
                
                # 添加到导入包的被导入
                packages[import_package]['imported_by'].add(package_name)
    
    # 计算指标
    for package_name, package_data in packages.items():
        # 计算抽象度
        if package_data['class_count'] > 0:
            package_data['abstractness'] = (package_data['abstract_count'] + package_data['interface_count']) / package_data['class_count']
        else:
            package_data['abstractness'] = 0
        
        # 计算Fan-In和Fan-Out
        package_data['fan_in'] = len(package_data['imported_by'])
        package_data['fan_out'] = len(package_data['imports'])
        
        # 计算不稳定性
        if package_data['fan_in'] + package_data['fan_out'] > 0:
            package_data['instability'] = package_data['fan_out'] / (package_data['fan_in'] + package_data['fan_out'])
        else:
            package_data['instability'] = 0
        
        # 计算距离
        package_data['distance'] = abs(package_data['abstractness'] + package_data['instability'] - 1)
        
        # 转换集合为列表
        package_data['imports'] = list(package_data['imports'])
        package_data['imported_by'] = list(package_data['imported_by'])
    
    return packages 