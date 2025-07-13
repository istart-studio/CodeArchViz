"""
数据转换工具模块，负责转换数据格式
"""

from typing import List, Dict, Any


def convert_to_package_dependency(data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    将Java类数据转换为包依赖结构
    
    Args:
        data: Java类信息列表
        
    Returns:
        包依赖结构
    """
    # 包依赖结构
    package_deps = {}
    
    # 遍历所有类
    for item in data:
        package_name = item['package']
        
        # 如果包不存在，则创建
        if package_name not in package_deps:
            package_deps[package_name] = {
                'classes': [],
                'imports': set(),
                'imported_by': set()
            }
        
        # 添加类
        package_deps[package_name]['classes'].append(item['name'])
        
        # 处理导入
        for import_item in item['imports']:
            # 提取包名
            import_parts = import_item.split('.')
            if len(import_parts) > 1:
                import_package = '.'.join(import_parts[:-1])
                
                # 添加到当前包的导入
                package_deps[package_name]['imports'].add(import_package)
                
                # 如果导入的包不存在，则创建
                if import_package not in package_deps:
                    package_deps[import_package] = {
                        'classes': [],
                        'imports': set(),
                        'imported_by': set()
                    }
                
                # 添加到导入包的被导入
                package_deps[import_package]['imported_by'].add(package_name)
    
    # 转换集合为列表
    for package in package_deps:
        package_deps[package]['imports'] = list(package_deps[package]['imports'])
        package_deps[package]['imported_by'] = list(package_deps[package]['imported_by'])
    
    return package_deps


def calculate_fan_in_out(data: List[Dict[str, Any]], package_filter: str = None) -> List[Dict[str, Any]]:
    """
    计算类的Fan-In和Fan-Out值
    
    Args:
        data: Java类信息列表
        package_filter: 包名过滤器，只计算指定包下的类
        
    Returns:
        包含Fan-In和Fan-Out信息的列表
    """
    result = []
    
    for item in data:
        # 如果指定了包过滤器，则只处理该包下的类
        if package_filter and not item['package'].startswith(package_filter):
            continue
        
        # 计算Fan-In（被引用）
        fan_in = {
            'value': 0,
            'refs': []
        }
        
        full_name = f"{item['package']}.{item['name']}"
        
        for other_item in data:
            other_full_name = f"{other_item['package']}.{other_item['name']}"
            
            # 检查是否被其他类导入
            if full_name in other_item['imports']:
                fan_in['refs'].append({
                    'name': other_full_name
                })
        
        fan_in['value'] = len(fan_in['refs'])
        
        # 计算Fan-Out（引用）
        fan_out = {
            'value': len(item['imports']),
            'refs': [{'name': imp} for imp in item['imports']]
        }
        
        # 计算不稳定性
        instability = 0
        if fan_in['value'] + fan_out['value'] > 0:
            instability = fan_out['value'] / (fan_in['value'] + fan_out['value'])
        
        # 计算抽象度
        abstract = 0
        if item['type'] in ['abstract class', 'interface']:
            abstract = 1
        
        result.append({
            'fullName': full_name,
            'fanIn': fan_in,
            'fanOut': fan_out,
            'unstable': instability,
            'abstract': abstract
        })
    
    return result 