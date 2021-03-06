
// ref: https://umijs.org/config/

const hostUrl = 'http://bbs-bc.asml.com:8080';

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'spoker-react',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  "proxy": {// 配置fetch 路由转发至后台API服务地址.
    "/poker": {
      "target": `${hostUrl}`,
      "changeOrigin": true,
      secure: false, // 不进行证书验证
    },
    "/api": {
      "target": `${hostUrl}`,
      "changeOrigin": true,
      secure: false, // 不进行证书验证
    }
  },
}
