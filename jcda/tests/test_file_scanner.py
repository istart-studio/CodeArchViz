"""
文件扫描器测试模块
"""

import os
import tempfile
import unittest

from jcda.core.file_scanner import get_files, get_java_files


class TestFileScanner(unittest.TestCase):
    """文件扫描器测试类"""
    
    def setUp(self):
        """测试前准备"""
        # 创建临时目录
        self.temp_dir = tempfile.TemporaryDirectory()
        
        # 创建测试文件
        self.create_test_files()
    
    def tearDown(self):
        """测试后清理"""
        self.temp_dir.cleanup()
    
    def create_test_files(self):
        """创建测试文件"""
        # 创建Java文件
        with open(os.path.join(self.temp_dir.name, 'Test1.java'), 'w') as f:
            f.write('public class Test1 {}')
        
        # 创建子目录
        os.makedirs(os.path.join(self.temp_dir.name, 'subdir'))
        
        # 在子目录中创建Java文件
        with open(os.path.join(self.temp_dir.name, 'subdir', 'Test2.java'), 'w') as f:
            f.write('public class Test2 {}')
        
        # 创建非Java文件
        with open(os.path.join(self.temp_dir.name, 'Test3.txt'), 'w') as f:
            f.write('This is not a Java file')
    
    def test_get_files(self):
        """测试get_files函数"""
        # 测试获取Java文件
        java_files = get_files(self.temp_dir.name, '.java')
        self.assertEqual(len(java_files), 2)
        
        # 测试获取txt文件
        txt_files = get_files(self.temp_dir.name, '.txt')
        self.assertEqual(len(txt_files), 1)
        
        # 测试获取不存在的后缀
        no_files = get_files(self.temp_dir.name, '.xyz')
        self.assertEqual(len(no_files), 0)
    
    def test_get_java_files(self):
        """测试get_java_files函数"""
        java_files = get_java_files(self.temp_dir.name)
        self.assertEqual(len(java_files), 2)
        
        # 检查文件路径
        file_names = [os.path.basename(f) for f in java_files]
        self.assertIn('Test1.java', file_names)
        self.assertIn('Test2.java', file_names)


if __name__ == '__main__':
    unittest.main() 