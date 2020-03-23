import React, { Fragment } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const SinglePost = ({ title, body }) => {
  return (
    <Fragment>
      <Layout style={styles.post}>
        <Text style={styles.title}>{title}</Text>
        <Text>{body}</Text>
      </Layout>
      <Divider style={styles.postDivider} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    color: '#333366'
  },
  post: {
    padding: 20
  },
  postDivider: {
    marginBottom: 15
  }
});

export default SinglePost;
