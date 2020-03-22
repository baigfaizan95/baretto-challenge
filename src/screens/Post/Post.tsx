import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';
import { createErrorMessageSelector, createLoadingSelector } from '../../utils';
import {
  FETCH_POST,
  FETCH_POST_COMMENTS,
  fetchPost,
  fetchComments
} from '../../actions/posts';
import { connect } from 'react-redux';

const BackIcon = style => <Icon {...style} name='arrow-back' />;

const Post = ({
  navigation,
  route,
  post,
  comments,
  loading,
  error,
  fetchPost,
  fetchComments
}) => {
  const id = route.params?.id;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!id) {
        navigation.goBack();
      } else {
        fetchPost(id);
        fetchComments(id);
      }
    });
    return unsubscribe;
  }, []);
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title='MyApp'
        alignment='center'
        leftControl={BackAction()}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category='h1'>POST</Text>
      </Layout>
    </SafeAreaView>
  );
};

const errorSelector = createErrorMessageSelector([
  FETCH_POST,
  FETCH_POST_COMMENTS
]);
const loadingSelector = createLoadingSelector([
  FETCH_POST,
  FETCH_POST_COMMENTS
]);

const mapState = ({ posts: { post, comments }, loading, error }) => {
  return {
    post,
    comments,
    loading: loadingSelector(loading),
    error: errorSelector(error)
  };
};

export default connect(mapState, { fetchPost, fetchComments })(Post);
