# encoding: utf-8
import json

from scan.load_source import load_source_file
from scan.read_source_file import getJavaFiles

# 扫描包的文件
# 扫描文件夹下的所有 *.java 文件
file_path = "/Volumes/mac工作/workplace/dr/dr_strategy/retail/src/main/java"
source_files = getJavaFiles(file_path);

cards: [] = []

for source_file in source_files:
    cards.append(load_source_file(source_file))

cards_json = json.dumps(cards)
# print(cards_json)

# with open('/Users/dy/Downloads/java_fan_in_fan_out.json', 'w', encoding='utf-8') as f:
#     f.write(cards_json)

js_data = "var data=" + cards_json + ";"
with open('view_ec/source_json_data.js', 'w', encoding='utf-8') as f:
    f.write(js_data)
