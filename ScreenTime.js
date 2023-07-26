import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import * as ReactNativeDeviceActivity from 'react-native-device-activity';

export default function ScreenTime() {
  const [screenOnTime, setScreenOnTime] = useState(0);

  const getTotalScreenTime = () => {
    const listener = ReactNativeDeviceActivity.addEventReceivedListener(
      event => {
        const name = event.nativeEvent.callbackName;
        if (name === 'eventDidReachThreshold') {
          const time = event.nativeEvent.time;
          setScreenOnTime(time);
        }
      },
    );

    // Track screen on time
    ReactNativeDeviceActivity.requestAuthorization().then(resp => {
      console.log(resp, '--->resp');
    });
    ReactNativeDeviceActivity.startMonitoring(
      'DeviceActivity.ScreenOn',
      {
        intervalStart: {hour: 0, minute: 0, second: 0},
        intervalEnd: {hour: 23, minute: 59, second: 59},
        repeats: true,
      },
      [
        {
          eventName: 'screen_on_time',
          threshold: {minute: 1},
        },
      ],
    );

    return () => {
      // Remove event listener when component unmounts
      listener.remove();
    };
  };

  return (
    <View>
      <Button title="get total screen time" onPress={getTotalScreenTime} />
      <Text>Total screen on time: {screenOnTime} seconds</Text>
    </View>
  );
}
