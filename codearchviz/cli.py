"""
命令行接口模块，提供命令行工具
"""

import os
import argparse
import sys

from codearchviz.main import analyze_project, generate_visualization_data
from codearchviz.serve import main as serve_main
from codearchviz.config import LANGUAGE, SOURCE_PATH, OUTPUT_PATH


def parse_args():
    """解析命令行参数"""
    parser = argparse.ArgumentParser(description='CodeArchViz - 代码架构可视化工具')
    
    # 创建子命令解析器
    subparsers = parser.add_subparsers(dest='command', help='命令')
    
    # 分析命令
    analyze_parser = subparsers.add_parser('analyze', help='分析项目代码')
    analyze_parser.add_argument('-p', '--path', default=SOURCE_PATH,
                               help='源代码路径')
    analyze_parser.add_argument('-l', '--language', default=LANGUAGE,
                               help='编程语言 (目前支持: java)')
    analyze_parser.add_argument('-o', '--output', default=OUTPUT_PATH,
                               help='输出目录')
    
    # 服务命令
    serve_parser = subparsers.add_parser('serve', help='启动Web服务器')
    
    # 语言命令
    languages_parser = subparsers.add_parser('languages', help='显示支持的编程语言')
    
    # 版本命令
    version_parser = subparsers.add_parser('version', help='显示版本信息')
    
    return parser.parse_args()


def main():
    """命令行入口"""
    args = parse_args()
    
    if args.command == 'analyze':
        # 检查源代码路径
        if not os.path.exists(args.path):
            print(f"错误: 源代码路径不存在: {args.path}")
            sys.exit(1)
        
        # 检查语言支持
        supported_languages = ['java']
        if args.language not in supported_languages:
            print(f"错误: 不支持的语言: {args.language}")
            print(f"目前支持的语言: {', '.join(supported_languages)}")
            sys.exit(1)
        
        # 分析项目
        data = analyze_project(args.path, args.language)
        generate_visualization_data(data, args.output)
        
        print(f"分析完成，共处理 {len(data)} 个模块")
        print(f"可以通过运行 'codearchviz serve' 来查看可视化结果")
    
    elif args.command == 'serve':
        # 启动Web服务器
        serve_main()
    
    elif args.command == 'languages':
        # 显示支持的语言
        print("目前支持的编程语言:")
        print("- java: Java语言")
        print("\n计划支持的语言:")
        print("- python: Python语言")
        print("- javascript: JavaScript语言")
        print("- go: Go语言")
    
    elif args.command == 'version':
        # 显示版本信息
        from codearchviz import __version__
        print(f"CodeArchViz - 代码架构可视化工具 版本 {__version__}")
    
    else:
        # 默认显示帮助信息
        parse_args(['--help'])


if __name__ == '__main__':
    main() 