import React, { useEffect, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Divider,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  Layout
} from '@ui-kitten/components';
import { createErrorMessageSelector, createLoadingSelector } from '../../utils';
import {
  FETCH_POST,
  FETCH_POST_COMMENTS,
  fetchPost,
  fetchComments
} from '../../actions/posts';
import { connect } from 'react-redux';
import { StyleSheet, Alert } from 'react-native';
import LoadingPost from '../../components/LoadingPost';
import { ScrollView } from 'react-native-gesture-handler';
import { IPostComment } from '../../interfaces/posts';
import CommentCard from '../../components/CommentCard';
import SinglePost from '../../components/SinglePost';
import { alert } from '../../actions/app';

const BackIcon = style => <Icon {...style} name='arrow-back' />;

const Post = ({
  navigation,
  route,
  post,
  comments,
  loading,
  fetchPost,
  fetchComments,
  error,
  alert
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

  useLayoutEffect(() => {
    if (error[FETCH_POST]) {
      alert({
        title: 'Error',
        message: 'failed to fetch post',
        error: FETCH_POST
      });
      return navigation.navigate('Home');
    }
  }, [error]);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation leftControl={BackAction()} />
      <Divider />
      {loading || !post.title ? (
        <LoadingPost />
      ) : (
        <ScrollView style={styles.container}>
          <SinglePost title={post.title} body={post.body} />
          {comments.length > 0 && (
            <Text style={styles.commentTitle}>Comments</Text>
          )}
          <Divider />
          <Layout>
            {comments.map((comment: IPostComment, index) => (
              <CommentCard
                length={comments.length}
                index={index}
                key={index}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </Layout>
          <Divider />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  commentTitle: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff9999'
  },
  container: {
    flex: 1
  }
});

const errorSelector = createErrorMessageSelector([FETCH_POST]);
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

export default connect(mapState, { fetchPost, fetchComments, alert })(Post);
