import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { createLoadingSelector, createErrorMessageSelector } from '../../utils';
import { fetchPosts, FETCH_POSTS, clearPost } from '../../actions/posts';
import PostCard from '../../components/PostCard';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { IPost } from '../../interfaces/posts';
import LoadingCard from '../../components/LoadingCard';

const loadingSize = Array(3).fill(0);

const Home = ({ navigation, fetchPosts, posts, loading, clearPost }) => {
  useEffect(() => {
    fetchPosts();

    const unsubscribe = navigation.addListener('focus', () => {
      clearPost();
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='Posts' alignment='center' />
      <Divider />
      {loading ? (
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
          {loadingSize.map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </ScrollView>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <PostCard
              userId={item.userId}
              body={item.body}
              title={item.title}
              id={item.id}
              index={index}
            />
          )}
          keyExtractor={(item: IPost) => String(item.id)}
          refreshing={loading}
          onRefresh={fetchPosts}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const loadingSelector = createLoadingSelector([FETCH_POSTS]);
const errorSelector = createErrorMessageSelector([FETCH_POSTS]);

const mapState = ({ posts: { posts }, loading, error }) => {
  return {
    posts,
    loading: loadingSelector(loading),
    error: errorSelector(error)
  };
};

export default connect(mapState, { fetchPosts, clearPost })(Home);
