import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const categories = ['Leafy Vegetables', 'Root Vegetables', 'Exotic Vegetables', 'Fruits', 'Organic Picks'];

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F7FAF7', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#1B5E20' }}>Fresh Basket</Text>
      <Text style={{ marginTop: 6, color: '#4A4A4A' }}>Farm-fresh deliveries in minutes</Text>
      <View style={{ marginTop: 16, padding: 12, backgroundColor: '#E8F5E9', borderRadius: 12 }}>
        <Text style={{ fontWeight: '600' }}>Daily Deal: 20% off on seasonal fruits</Text>
      </View>
      {categories.map(category => (
        <View key={category} style={{ marginTop: 12, padding: 14, backgroundColor: '#fff', borderRadius: 12 }}>
          <Text style={{ fontWeight: '600' }}>{category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
