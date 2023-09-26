# 白名单Merk树生成小工具

## 环境准备
- node.js: [windows安装包](https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi)
- ts-node: npm install -g typescript ts-node


## 生成Merk树
1. 在whitelist.json文件中填写白名单地址
2. 在本文件夹目录下运行以下命令
```shell
npm i
npx ts-node ./main.ts
```
3. 以上运行结果将输出Root节点与所有Leaf节点
