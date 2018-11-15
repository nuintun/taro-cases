import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import './list-item.scss';

export default class ListItem extends Component {
  static defaultProps = {
    iconSize: 24,
    iconColor: '#ccc'
  };

  render() {
    const { thumb, extraText, note, title, arrow, hasBorder, iconSize, iconColor } = this.props;

    return (
      <View className={hasBorder ? 'listContainer hasBorder' : 'listContainer'}>
        <View className="itemThumb">{thumb ? <Image src={thumb} /> : ''}</View>
        <View className="itemContent">
          <View className="itemTitle">{title}</View>
          {note && <View className="itemNote">{note}</View>}
        </View>
        <View className="itemExtra">
          {extraText && (
            <View
              className="extraInfo"
              style={{
                width: `calc(100% - ${iconStyle.size})`
              }}
            >
              {extraText}
            </View>
          )}
          <View className="extraIcon">
            {arrow === 'down' && <AtIcon value="chevron-down" size={iconSize} color={iconColor} />}
            {arrow === 'up' && <AtIcon value="chevron-up" size={iconSize} color={iconColor} />}
            {arrow === 'right' && <AtIcon value="chevron-right" size={iconSize} color={iconColor} />}
          </View>
        </View>
      </View>
    );
  }
}
