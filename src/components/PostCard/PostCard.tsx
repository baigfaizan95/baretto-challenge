import React, { FC } from 'react';
import { Card, Text, Divider } from '@ui-kitten/components';
import { IPost } from '../../interfaces/posts';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IIndex {
  index: number;
}
type IPostCard = IPost & IIndex;

const PostCard: FC<IPostCard> = ({ title, id, index }) => {
  const navigation = useNavigation();

  const gotoPost = () => {
    navigation.navigate('Post', { id });
  };
  return (
    <Card
      onPress={gotoPost}
      style={{ ...styles.card, marginTop: index === 0 ? 10 : 5 }}
    >
      <Text style={styles.title}>{title}</Text>
      <Divider />
      <Text style={styles.readMore}>Read More</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#333366'
  },
  readMore: {
    fontSize: 12,
    textAlign: 'right',
    paddingTop: 10,
    color: '#ff9999'
  }
});

export default PostCard;
