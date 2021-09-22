# -*- coding:utf-8 -*-


import os


# 获取目录下的文件
def getFiles(dir, suffix):  # 查找根目录，文件后缀
    res = []
    for root, directory, files in os.walk(dir):  # =>当前根,根下目录,目录下的文件
        for filename in files:
            name, suf = os.path.splitext(filename)  # =>文件名,文件后缀
            if suf == suffix:
                res.append(os.path.join(root, filename))  # =>吧一串字符串组合成路径
    return res


def getJavaFiles(dir):
    return getFiles(dir, '.java')



# /Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy 下的所有 *.java 文件
#
# sourceFiles: list = getJavaFiles("/Users/dongyan/Documents/workplace/history/dongrun_project/dr_strategy")
# print("共计：%d " % len(sourceFiles))
#
# for file in sourceFiles:  # =>查找以.py结尾的文件
#     print("文件名：" + file)

# 输出文件
