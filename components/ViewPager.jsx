import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';

export default function Choice() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <Layout
        style={styles.tab}
        level='2'
      >
        <Text category='h5'>
Vipassana Meditation 2 hours
        </Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'
      >
        <Text category='h5'>
Vipassana Meditation 1 hour
        </Text>
      </Layout>      
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 70,   
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor:"skyblue",
  },
});