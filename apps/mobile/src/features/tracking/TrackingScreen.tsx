import React from 'react';
import { Text, View } from 'react-native';

const statuses = ['Confirmed', 'Packed', 'Out for delivery', 'Arriving soon', 'Delivered'];

export default function TrackingScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Live Order Tracking</Text>
      {statuses.map(status => (
        <Text key={status} style={{ marginTop: 8 }}>• {status}</Text>
      ))}
      <Text style={{ marginTop: 12 }}>Socket.io room subscription integrated in backend contract.</Text>
    </View>
  );
}
