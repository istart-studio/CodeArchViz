"""
整洁架构分析工具，用于评估代码是否符合整洁架构原则
"""

from typing import List, Dict, Any


def identify_layers(data: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    """
    识别代码中的架构层次
    
    Args:
        data: 模块信息列表
        
    Returns:
        按层次分类的模块字典
    """
    layers = {
        'entities': [],      # 实体层: 核心业务规则
        'use_cases': [],     # 用例层: 应用特定业务规则
        'interface_adapters': [],  # 接口适配器层: 控制器、网关等
        'frameworks': [],    # 框架和驱动层: 数据库、Web框架等
        'undefined': [],     # 未定义层
    }
    
    # 基于命名约定识别层次
    for item in data:
        package_name = item['package'].lower()
        name = item['name'].lower()
        
        # 实体层
        if ('entity' in package_name or 'domain' in package_name or 'model' in package_name or
            'entity' in name or 'model' in name):
            layers['entities'].append(item)
        
        # 用例层
        elif ('usecase' in package_name or 'service' in package_name or 'interactor' in package_name or
              'usecase' in name or 'service' in name or 'interactor' in name):
            layers['use_cases'].append(item)
        
        # 接口适配器层
        elif ('controller' in package_name or 'presenter' in package_name or 'gateway' in package_name or
              'adapter' in package_name or 'repository' in package_name or
              'controller' in name or 'presenter' in name or 'gateway' in name or
              'adapter' in name or 'repository' in name):
            layers['interface_adapters'].append(item)
        
        # 框架和驱动层
        elif ('framework' in package_name or 'driver' in package_name or 'infrastructure' in package_name or
              'persistence' in package_name or 'ui' in package_name or 'web' in package_name or
              'framework' in name or 'driver' in name):
            layers['frameworks'].append(item)
        
        # 未定义层
        else:
            layers['undefined'].append(item)
    
    return layers


def check_dependency_violations(data: List[Dict[str, Any]], layers: Dict[str, List[Dict[str, Any]]]) -> List[Dict[str, Any]]:
    """
    检查依赖关系违反整洁架构原则的情况
    
    Args:
        data: 模块信息列表
        layers: 按层次分类的模块字典
        
    Returns:
        违反依赖规则的列表
    """
    violations = []
    
    # 构建层次映射表
    layer_map = {}
    for layer_name, items in layers.items():
        for item in items:
            full_name = f"{item['package']}.{item['name']}"
            layer_map[full_name] = layer_name
    
    # 定义层次优先级 (内层 -> 外层)
    layer_priority = {
        'entities': 1,
        'use_cases': 2,
        'interface_adapters': 3,
        'frameworks': 4,
        'undefined': 5
    }
    
    # 检查依赖关系
    for item in data:
        source_layer = layer_map.get(f"{item['package']}.{item['name']}", 'undefined')
        source_priority = layer_priority[source_layer]
        
        # 检查每个导入
        for import_item in item['imports']:
            if import_item in layer_map:
                target_layer = layer_map[import_item]
                target_priority = layer_priority[target_layer]
                
                # 违反依赖规则: 外层依赖内层
                if source_priority < target_priority:
                    violations.append({
                        'source': f"{item['package']}.{item['name']}",
                        'source_layer': source_layer,
                        'target': import_item,
                        'target_layer': target_layer,
                        'violation_type': '依赖方向违反',
                        'description': f"内层 ({source_layer}) 依赖外层 ({target_layer})"
                    })
    
    return violations


def calculate_clean_architecture_metrics(data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    计算整洁架构相关指标
    
    Args:
        data: 模块信息列表
        
    Returns:
        整洁架构指标
    """
    # 识别架构层次
    layers = identify_layers(data)
    
    # 检查依赖违规
    violations = check_dependency_violations(data, layers)
    
    # 计算指标
    total_modules = len(data)
    total_dependencies = sum(len(item['imports']) for item in data)
    violation_count = len(violations)
    
    # 计算依赖合规率
    compliance_rate = 1.0
    if total_dependencies > 0:
        compliance_rate = 1.0 - (violation_count / total_dependencies)
    
    # 计算层次分布
    layer_distribution = {
        layer: len(items) / total_modules if total_modules > 0 else 0
        for layer, items in layers.items()
    }
    
    return {
        'total_modules': total_modules,
        'total_dependencies': total_dependencies,
        'violation_count': violation_count,
        'compliance_rate': compliance_rate,
        'layer_distribution': layer_distribution,
        'layers': {layer: len(items) for layer, items in layers.items()},
        'violations': violations
    } 