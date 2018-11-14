import { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
export { default as ListItem } from './list-item';

export default class List extends Component {
  render() {
    return <View className="list">{this.props.children}</View>;
  }
}
