"""
命令行接口模块，提供命令行工具
"""

import os
import argparse
import sys

from jcda.main import analyze_java_project, generate_visualization_data
from jcda.serve import main as serve_main
from jcda.config import JAVA_SOURCE_PATH, OUTPUT_PATH


def parse_args():
    """解析命令行参数"""
    parser = argparse.ArgumentParser(description='Java代码依赖分析工具')
    
    # 创建子命令解析器
    subparsers = parser.add_subparsers(dest='command', help='命令')
    
    # 分析命令
    analyze_parser = subparsers.add_parser('analyze', help='分析Java代码')
    analyze_parser.add_argument('-p', '--path', default=JAVA_SOURCE_PATH,
                               help='Java源代码路径')
    analyze_parser.add_argument('-o', '--output', default=OUTPUT_PATH,
                               help='输出目录')
    
    # 服务命令
    serve_parser = subparsers.add_parser('serve', help='启动Web服务器')
    
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
        
        # 分析Java代码
        cards = analyze_java_project(args.path)
        generate_visualization_data(cards, args.output)
        
        print(f"分析完成，共处理 {len(cards)} 个Java类")
        print(f"可以通过运行 'jcda serve' 来查看可视化结果")
    
    elif args.command == 'serve':
        # 启动Web服务器
        serve_main()
    
    elif args.command == 'version':
        # 显示版本信息
        from jcda import __version__
        print(f"Java代码依赖分析工具 (JCDA) 版本 {__version__}")
    
    else:
        # 默认显示帮助信息
        parse_args(['--help'])


if __name__ == '__main__':
    main() 