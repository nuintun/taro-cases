import { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import './list-item.scss';

export default class ListItem extends Component {
  render() {
    const {
      thumb,
      extraText,
      note,
      title,
      arrow,
      hasBorder,
      iconStyle = { size: size ? size : 24, color: color ? color : '#ccc' }
    } = this.props;

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
            {arrow === 'down' && <AtIcon value="chevron-down" style={iconStyle} />}
            {arrow === 'up' && <AtIcon value="chevron-up" style={iconStyle} />}
            {arrow === 'right' && <AtIcon value="chevron-right" style={iconStyle} />}
          </View>
        </View>
      </View>
    );
  }
}
