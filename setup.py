from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

with open("requirements.txt", "r") as fh:
    requirements = fh.read().splitlines()

setup(
    name="codearchviz",
    version="0.1.0",
    author="CodeArchViz Team",
    author_email="example@example.com",
    description="A tool for visualizing and analyzing code architecture",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/CodeArchViz",
    packages=find_packages(),
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=requirements,
    entry_points={
        "console_scripts": [
            "codearchviz=codearchviz.cli:main",
        ],
    },
) 