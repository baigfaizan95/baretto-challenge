import React from 'react';
import { StyleSheet } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { Card } from '@ui-kitten/components';

const LoadingCard = () => (
  <Card style={styles.card}>
    <Placeholder Animation={Fade}>
      <PlaceholderLine width={80} />
      <PlaceholderLine width={80} />
    </Placeholder>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  }
});

export default LoadingCard;
