from setuptools import setup, find_packages

setup(
    name="fitform",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "flask>=2.3.0",
        "opencv-python>=4.8.0",
        "numpy>=1.24.0", 
        "python-dotenv>=1.0.0",
    ],
    python_requires=">=3.8",
)