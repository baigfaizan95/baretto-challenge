import { Alert } from 'react-native';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_LOADING = 'CLEAR_LOADING';

export const clearError = (error: string) => ({
  type: CLEAR_ERRORS,
  payload: { error }
});

export const clearLoading = () => ({
  type: CLEAR_LOADING
});

export const alert = ({
  title,
  message,
  error
}: {
  title: string;
  message: string;
  error: string;
}) => dispatch => {
  Alert.alert(title, message);
  dispatch(clearError(error));
};
