import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class WatchRecord extends React.Component{
    constructor(props){
      super(props);
    }
    
    static propTypes = {
          record: PropTypes.array.isRequired,
        }; 
  
    render() {
      console.log("this.props.record: ", this.props.record);
      return (
        <ScrollView style={styles.recordList}>
          {this.props.record.map( (rowData, i) => (
            <View style={styles.recordItem} key={i}>
              <Text style={styles.recordItemTitle}>{rowData.title}</Text>
              <View style={{alignItems: "center"}}>
                <Text style={styles.recordItemTime}>{rowData.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    }
  }


export default WatchRecord;
