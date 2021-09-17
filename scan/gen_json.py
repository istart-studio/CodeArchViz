import json

from scan.load_source_file import load_source_file
from scan.read_source import getJavaFiles

# 扫描包的文件
# /Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy 下的所有 *.java 文件
source_files = getJavaFiles("/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy")

cards: [] = []

for source_file in source_files:
    cards.append(load_source_file(source_file))

cards_json = json.dumps(cards)
print(cards_json)

with open('/Users/dongyan/Downloads/java_fan_in_fan_out.json', 'w', encoding='utf-8') as f:
    f.write(cards_json)
