# -*- coding:utf-8 -*-

import json


def set_name(instance, value, header):
    instance['name'] = value


def set_package(instance, value, header):
    instance['package'] = value


def set_imports(instance, value, header):
    instance['imports'].append(value)


def set_class(instance, value, header):
    # 只做一次
    if instance['class_name'] != "":
        return

    instance['class_name'] = value
    instance['type'] = header.strip()
    values = value.split(" ")
    instance['name'] = values[0]
    if len(values) >= 3:
        if values[1] == 'extends':
            instance['extend_name'] = values[2]
        if values[1] == 'implements':
            instance['implements_name'] = values[2].split(',')


# line_headers: [] = ["package", "import", "class"]

line_headers_setter: {} = {
    "package ": set_package,
    "import ": set_imports,
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
}


def get_item(header, line):
    package_index = line.find(header)
    if package_index != -1:
        return line[package_index + len(header):len(line)]
    return None


def set_source_prop(header, instance, line):
    header_value = get_item(header, line)
    if header_value is not None:
        line_headers_setter[header](instance, header_value.strip(), header)


# 获取目录下的文件
def load_source_file(file):
    source_instance = {"name": "",
                       "package": "",
                       "type": "",
                       "imports": [],
                       "class_name": "",
                       "extend_name": "",
                       "implements_name": [],
                       "file_name": file,
                       }

    reader = open(file)
    try:
        for line in reader.readlines():
            line = line.strip().replace('\n', '').replace('\r', '') \
                .replace(';', '').replace('{', '').replace('}', '')
            for header in line_headers_setter.keys():
                set_source_prop(header, source_instance, line)
    finally:
        reader.close()

    return source_instance


# sourceInstance = load_source_file(
#     "/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy/strategy/src/main/java/com/dr/strategy/basic/identity/IdentityManager.java")
#
# print(json.dumps(sourceInstance))
