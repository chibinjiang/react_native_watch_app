import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


class WatchFace extends React.Component {
  constructor(props){
    super(props);
  }
  static propTypes = {
    sectionTime: PropTypes.string.isRequired,
    totalTime: PropTypes.string.isRequired,
  }; 

  render() {
    return(
      <View style={styles.watchFaceContainer}>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}
  
export default WatchFace;
