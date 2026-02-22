import React from 'react';
import { Text, View } from 'react-native';

export default function CheckoutScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Checkout</Text>
      <Text style={{ marginTop: 8 }}>Address selector, delivery slot booking, Express option, Razorpay + COD supported.</Text>
    </View>
  );
}
