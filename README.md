## Watch App with React Native

### 1. Preface
最近在学习哈佛大学的CS50 React Native课程, 于是 在Github找了[30 days of react native](https://github.com/fangwei716/30-days-of-react-native)项目来练练手. 因为原来的代码在我电脑上跑步起来, 主要原因是 `":CFBundleIdentifier", Does Not Exist`, 所以我把项目转移到课程CS50里面使用的 [expo](https://docs.expo.io/versions/v34.0.0/).

### 2. How to run
```
expo init react_native_watch_app # choose blank minimal
cd react_native_watch_app
vim package.json  # add "react-dimensions": "^1.3.1"
npm install
npm start
```

