import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as ReactNativeDeviceActivity from 'react-native-device-activity';

const startMonitoring = activitySelection => {
  const timeLimitMinutes = 1;

  const totalEvents = (1 * 60) / timeLimitMinutes;

  let events = [];

  // loop over each our of the day
  for (let hour = 0; hour < 24; hour++) {
    for (let i = 0; i < totalEvents; i++) {
      const name = `${(i + 1) * timeLimitMinutes}_minutes_today`;
      events.push({
        eventName: name,
        familyActivitySelection: activitySelection,
        threshold: {minute: (i + 1) * timeLimitMinutes},
      });
    }

    ReactNativeDeviceActivity.startMonitoring(
      'DeviceActivity.AppLoggedTimeDaily.' + hour,
      {
        intervalStart: {hour, minute: 0, second: 0},
        intervalEnd: {hour, minute: 59, second: 59},
        repeats: true,
      },
      events,
    );
    events = [];
  }
};

export default function App() {
  const [largestEvent, setLargestEvent] = useState(null);
  const [screenOnTime, setScreenOnTime] = useState(0);

  const [familyActivitySelection, setFamilyActivitySelection] = useState(null);

  const refreshEvents = useCallback(() => {
    const eventsParsed = ReactNativeDeviceActivity.getEvents();
    const today = new Date();

    const todaysThresholdsReached = eventsParsed.filter(
      ({callbackName, lastCalledAt}) =>
        callbackName === 'eventDidReachThreshold' &&
        lastCalledAt.getHours() === today.getHours() &&
        lastCalledAt.getDate() === today.getDate() &&
        lastCalledAt.getMonth() === today.getMonth() &&
        lastCalledAt.getFullYear() === today.getFullYear(),
    );

    const eventsOccurredToday = todaysThresholdsReached.map(event => {
      const minutesRegistered = parseInt(
        event.eventName.split('_minutes_today')[0],
        10,
      );
      return {
        activity: event.activityName,
        event: event.eventName,
        registeredAt: event.lastCalledAt,
        minutesRegistered,
      };
    });

    const largestMinutesRegistered = eventsOccurredToday.reduce(
      (acc, event) => {
        return event.minutesRegistered > acc.minutesRegistered ? event : acc;
      },
      {minutesRegistered: 0, event: 'none', registeredAt: new Date()},
    );

    setLargestEvent(largestMinutesRegistered);
  }, []);

  useEffect(() => {
    ReactNativeDeviceActivity.requestAuthorization();
    const listener = ReactNativeDeviceActivity.addEventReceivedListener(
      event => {
        console.log('got event, refreshing events!', event);
        refreshEvents();
      },
    );
    return () => {
      listener.remove();
    };
  }, [refreshEvents]);

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

  return useMemo(
    () => (
      <View style={styles.container}>
        <Button
          title="Start monitoring"
          onPress={() => startMonitoring(familyActivitySelection)}
        />

        <Button
          title="Stop monitoring"
          onPress={() => ReactNativeDeviceActivity.stopMonitoring()}
        />

        <Button title="Get events" onPress={refreshEvents} />

        <ReactNativeDeviceActivity.DeviceActivitySelectionView
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'red',
            borderRadius: 10,
            borderWidth: 10,
            borderColor: 'red',
          }}
          onSelectionChange={event => {
            if (
              event.nativeEvent.familyActivitySelection !==
              familyActivitySelection
            ) {
              setFamilyActivitySelection(
                event.nativeEvent.familyActivitySelection,
              );
              // alert(event.nativeEvent.familyActivitySelection);
            }
            console.log(event.nativeEvent.familyActivitySelection);
          }}
          familyActivitySelection={familyActivitySelection}>
          <View
            style={{backgroundColor: 'green', height: 100}}
            pointerEvents="none"
          />
        </ReactNativeDeviceActivity.DeviceActivitySelectionView>
        <Text>{JSON.stringify(largestEvent, null, 2)}</Text>

        <View>
          <Button title="get total screen time" onPress={getTotalScreenTime} />
          <Text>Total screen on time: {screenOnTime} seconds</Text>
        </View>
      </View>
    ),
    [familyActivitySelection, largestEvent, refreshEvents, screenOnTime],
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
