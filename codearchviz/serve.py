"""
Web服务器模块，负责提供可视化界面的HTTP服务
"""

import os
import webbrowser
from flask import Flask, send_from_directory

from codearchviz.config import SERVER


app = Flask(__name__)


@app.route('/')
def index():
    """主页，重定向到可视化页面"""
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'view_ec'), 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """提供静态文件服务"""
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'view_ec'), path)


@app.route('/js/<path:path>')
def serve_js(path):
    """提供JS文件服务"""
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'view_ec', 'js'), path)


@app.route('/css/<path:path>')
def serve_css(path):
    """提供CSS文件服务"""
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'view_ec', 'css'), path)


def main():
    """启动Web服务器"""
    url = f"http://{SERVER['host']}:{SERVER['port']}"
    print(f"启动Web服务器: {url}")
    
    # 在新线程中启动浏览器
    webbrowser.open(url)
    
    # 启动Flask应用
    app.run(
        host=SERVER['host'],
        port=SERVER['port'],
        debug=SERVER['debug']
    )


if __name__ == "__main__":
    main() 