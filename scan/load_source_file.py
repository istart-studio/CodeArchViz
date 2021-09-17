# -*- coding:utf-8 -*-

import json


# 基本属性
# Source: {} = {"name": "",
#               "package": "",
#               "imports": [],
#               "class_name": "",
#               "interface_name": "",
#               "enum_name": "",
#               "extend_name": ""
#               }


def set_name(instance, value):
    instance['name'] = value


def set_package(instance, value):
    instance['package'] = value


def set_imports(instance, value):
    instance['imports'].append(value)


def set_class(instance, value):
    if instance['class_name'] != "":
        return

    instance['class_name'] = value
    values = value.split(" ")
    instance['name'] = values[0]
    if len(values) >= 3:
        if values[1] == 'extends':
            instance['extend_name'] = values[2]
        if values[1] == 'implements':
            instance['implements_name'] = values[2].split(',')


# line_headers: [] = ["package", "import", "class"]

line_headers_setter: {} = {
    "package": set_package,
    "import": set_imports,
    "class": set_class
}


def get_item(header, line):
    package_index = line.find(header)
    if package_index != -1:
        return line[package_index + len(header):len(line)]
    return None


def set_source_prop(header, instance, line):
    header_value = get_item(header, line)
    if header_value is not None:
        line_headers_setter[header](instance, header_value.lstrip())


# 获取目录下的文件
def load_source_file(file):
    source_instance = {"name": "",
                       "package": "",
                       "imports": [],
                       "class_name": "",
                       "interface_name": "",
                       "enum_name": "",
                       "extend_name": "",
                       "implements_name": [],
                       "file_name": file,
                       }

    reader = open(file)
    try:
        for line in reader.readlines():
            line = line.lstrip().replace('\n', '').replace('\r', '') \
                .replace(';', '').replace('{', '').replace('}', '')
            for header in line_headers_setter.keys():
                set_source_prop(header, source_instance, line)
    finally:
        reader.close()

    return source_instance


sourceInstance = load_source_file(
    "/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy/strategy/src/main/java/com/dr/strategy/basic/identity/IdentityManager.java")

print(json.dumps(sourceInstance))
