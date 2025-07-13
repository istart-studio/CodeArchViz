"""
源代码分析器模块，负责解析Java源代码文件
"""

from typing import Dict, List, Any, Callable


def set_name(instance: Dict[str, Any], value: str, header: str) -> None:
    """设置类名"""
    instance['name'] = value


def set_package(instance: Dict[str, Any], value: str, header: str) -> None:
    """设置包名"""
    instance['package'] = value


def set_imports(instance: Dict[str, Any], value: str, header: str) -> None:
    """添加导入"""
    instance['imports'].append(value)


def substr_class_name(value: str, search_char: str) -> str:
    """提取类名（处理泛型）"""
    pattern_index = value.find(search_char)
    if pattern_index != -1:
        return value[0:pattern_index]
    else:
        return value


def set_class(instance: Dict[str, Any], value: str, header: str) -> None:
    """设置类信息"""
    # 只做一次
    if instance['class_name'] != "":
        return

    # 范型类 <E,V>
    instance['class_name'] = substr_class_name(value, "<")

    instance['type'] = header.strip()
    values = instance['class_name'].split(" ")
    instance['name'] = values[0]
    if len(values) >= 3:
        if values[1] == 'extends':
            instance['extend_name'] = substr_class_name(values[2], "<")
        if values[1] == 'implements':
            instance['implements_name'] = values[2].split(',')


# 不同类型的Java元素处理器
LINE_HEADERS_SETTER: Dict[str, Callable] = {
    "package ": set_package,
    "import ": set_imports,
    "abstract class ": set_class,
    "public abstract class ": set_class,
    "private abstract class ": set_class,
    "protector abstract class ": set_class,
    "class ": set_class,
    "public class ": set_class,
    "private class ": set_class,
    "protector class ": set_class,
    "static class ": set_class,
    "interface ": set_class,
    "public interface ": set_class,
    "enum ": set_class,
    "public enum ": set_class,
    "private enum ": set_class,
    "@interface ": set_class,
    "public @interface ": set_class,
    "private @interface ": set_class,
    "protector @interface ": set_class,
}


def get_item(header: str, line: str) -> str:
    """从行中提取特定头部后的内容"""
    package_index = line.find(header)
    if package_index != -1:
        return line[package_index + len(header):len(line)]
    return None


def set_source_prop(header: str, instance: Dict[str, Any], line: str) -> None:
    """设置源代码属性"""
    header_value = get_item(header, line)
    if header_value is not None:
        LINE_HEADERS_SETTER[header](instance, header_value.strip(), header)


def load_source_file(file_path: str) -> Dict[str, Any]:
    """
    加载并解析Java源代码文件
    
    Args:
        file_path: Java文件路径
        
    Returns:
        包含Java类信息的字典
    """
    source_instance = {
        "name": "",
        "package": "",
        "type": "",
        "imports": [],
        "class_name": "",
        "extend_name": "",
        "implements_name": [],
        "file_name": file_path,
    }

    with open(file_path, 'r', encoding='utf-8') as reader:
        for line in reader:
            line = line.strip().replace('\n', '').replace('\r', '') \
                .replace(';', '').replace('{', '').replace('}', '')
            for header in LINE_HEADERS_SETTER.keys():
                set_source_prop(header, source_instance, line)

    return source_instance 