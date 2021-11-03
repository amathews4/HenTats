import React, { Component } from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  //ViroConstants
} from '@viro-community/react-viro';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const HelloWorldSceneAR = () => {
  /*
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
  */

  return (
    <ViroARScene>
      <ViroImage source = {require('../Images/jackie.png')}
        scale={[0.5,0.5,0.5]}
        position={[0,0,-1]} />
    </ViroARScene>
  );
};

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.navigatorRef = React.createRef();
    that = this;
  }
  componentDidMount() {
    var navRef = this.navigatorRef;
    this.setState({navigator: navRef});
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <ViroARSceneNavigator
        style = {{flex: 1}}
        ref = {this.navigatorRef}
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        />
        <View style = {style.takePic}>
          <TouchableOpacity onPress = {this.takeScreenshot}>
            <Text style = {style.buttonText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takeScreenshot() {
    console.log(that.navigatorRef);
    var curDate = new Date();
    var curDateFormat = curDate.toISOString().split('T')[0];
    that.navigatorRef.current._takeScreenshot('Viro' + curDateFormat, true);
  }
}

const style = StyleSheet.create({
  takePic: {
    //width:'50%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'lightblue',
  },
});