import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';

import './app.scss';

class App extends Component {
  config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarTitleText: 'Taro',
      navigationBarTextStyle: 'black',
      navigationBarBackgroundColor: '#fff'
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
