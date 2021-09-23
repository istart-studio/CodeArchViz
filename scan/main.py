import json

from scan.load_source import load_source_file
from scan.read_source_file import getJavaFiles

# 扫描包的文件
# /Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy 下的所有 *.java 文件
# source_files = getJavaFiles("/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy/strategy/src/main/java/com/dr/strategy/setting")
# source_files = getJavaFiles("/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy")
file_path = "/Users/dongyan/Documents/workplace/history/dongrun_project/pro_drs"
source_files = getJavaFiles(file_path);

cards: [] = []

for source_file in source_files:
    cards.append(load_source_file(source_file))

cards_json = json.dumps(cards)
print(cards_json)

with open('/Users/dongyan/Downloads/java_fan_in_fan_out_drs.json', 'w', encoding='utf-8') as f:
    f.write(cards_json)
