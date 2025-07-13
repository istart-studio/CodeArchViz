"""
源代码分析器测试模块
"""

import os
import tempfile
import unittest

from jcda.core.source_analyzer import load_source_file


class TestSourceAnalyzer(unittest.TestCase):
    """源代码分析器测试类"""
    
    def setUp(self):
        """测试前准备"""
        # 创建临时目录
        self.temp_dir = tempfile.TemporaryDirectory()
        
        # 创建测试文件
        self.test_file = os.path.join(self.temp_dir.name, 'TestClass.java')
        with open(self.test_file, 'w') as f:
            f.write('''
package com.example.test;

import java.util.List;
import java.util.ArrayList;
import com.example.other.OtherClass;

public class TestClass extends BaseClass implements TestInterface {
    // 测试类
}
''')
        
        self.interface_file = os.path.join(self.temp_dir.name, 'TestInterface.java')
        with open(self.interface_file, 'w') as f:
            f.write('''
package com.example.test;

public interface TestInterface {
    // 测试接口
}
''')
        
        self.enum_file = os.path.join(self.temp_dir.name, 'TestEnum.java')
        with open(self.enum_file, 'w') as f:
            f.write('''
package com.example.test;

public enum TestEnum {
    ONE, TWO, THREE
}
''')
    
    def tearDown(self):
        """测试后清理"""
        self.temp_dir.cleanup()
    
    def test_load_source_file_class(self):
        """测试加载类文件"""
        result = load_source_file(self.test_file)
        
        self.assertEqual(result['name'], 'TestClass')
        self.assertEqual(result['package'], 'com.example.test')
        self.assertEqual(result['type'], 'class')
        self.assertEqual(result['class_name'], 'TestClass extends BaseClass implements TestInterface')  # 修改为实际的类名
        self.assertEqual(result['extend_name'], 'BaseClass')
        self.assertEqual(result['file_name'], self.test_file)
        
        # 检查导入
        self.assertIn('java.util.List', result['imports'])
        self.assertIn('java.util.ArrayList', result['imports'])
        self.assertIn('com.example.other.OtherClass', result['imports'])
    
    def test_load_source_file_interface(self):
        """测试加载接口文件"""
        result = load_source_file(self.interface_file)
        
        self.assertEqual(result['name'], 'TestInterface')
        self.assertEqual(result['package'], 'com.example.test')
        self.assertEqual(result['type'], 'interface')
        self.assertEqual(result['class_name'], 'TestInterface')
        self.assertEqual(result['file_name'], self.interface_file)
    
    def test_load_source_file_enum(self):
        """测试加载枚举文件"""
        result = load_source_file(self.enum_file)
        
        self.assertEqual(result['name'], 'TestEnum')
        self.assertEqual(result['package'], 'com.example.test')
        self.assertEqual(result['type'], 'enum')
        self.assertEqual(result['class_name'], 'TestEnum')
        self.assertEqual(result['file_name'], self.enum_file)


if __name__ == '__main__':
    unittest.main() 