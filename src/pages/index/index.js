import { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import List, { ListItem } from '../../components/list';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <List>
          <ListItem title="我来打发" extraText="打发" arrow="right" />
        </List>
      </View>
    );
  }
}
