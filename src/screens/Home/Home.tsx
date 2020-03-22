import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { createLoadingSelector, createErrorMessageSelector } from '../../utils';
import { fetchPosts, FETCH_POSTS } from '../../actions/posts';

const Home = ({ navigation, fetchPosts, posts, loading, error }) => {
  const navigateDetails = () => {
    navigation.navigate('Post', { id: 1 });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPosts();
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Button onPress={navigateDetails}>Post</Button>
      </Layout>
    </SafeAreaView>
  );
};

const loadingSelector = createLoadingSelector([FETCH_POSTS]);
const errorSelector = createErrorMessageSelector([FETCH_POSTS]);

const mapState = ({ posts: { posts }, loading, error }) => {
  return {
    posts,
    loading: loadingSelector(loading),
    error: errorSelector(error)
  };
};

export default connect(mapState, { fetchPosts })(Home);
