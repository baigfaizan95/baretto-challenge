import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';

const CommentCard = ({ index, length, name, email, body }) => {
  return (
    <Layout
      style={{
        ...styles.commentContainer,
        paddingBottom: index === length - 1 ? 10 : 0,
        paddingTop: index === 0 ? 10 : 0
      }}
      key={index}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.comment}>{body}</Text>
      {index !== length - 1 && <Divider style={styles.commentDivider} />}
    </Layout>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333366'
  },
  email: {
    fontSize: 14,
    paddingBottom: 10
  },
  comment: {
    fontSize: 12
  },
  commentContainer: {
    paddingHorizontal: 20
  },
  commentDivider: {
    marginVertical: 10
  }
});

export default CommentCard;
