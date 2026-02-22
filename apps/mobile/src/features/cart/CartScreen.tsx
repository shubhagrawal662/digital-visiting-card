import React from 'react';
import { Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Smart Cart</Text>
      <Text style={{ marginTop: 8 }}>Supports 250g, 500g, 1kg and custom quantity.</Text>
      <Text style={{ marginTop: 8 }}>Dynamic coupon engine and upsell recommendations ready for API integration.</Text>
    </View>
  );
}
