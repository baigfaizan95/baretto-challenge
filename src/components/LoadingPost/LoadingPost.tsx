import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const LoadingPost = () => (
  <Layout style={styles.card}>
    <Placeholder style={{ marginBottom: 20 }} Animation={Fade}>
      <PlaceholderLine width={80} style={{ marginBottom: 20 }} />
      <PlaceholderLine height={10} />
      <PlaceholderLine height={10} />
      <PlaceholderLine height={10} />
      <PlaceholderLine height={10} />
    </Placeholder>
  </Layout>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    paddingVertical: 20,
    flex: 1
  }
});

export default LoadingPost;
