export default function LoginValidation(values) {
  const errors = {};
  if (!values.login || values.login.trim() === '') {
    errors.title = 'Enter login';
  }
  if (!values.password || values.categories.trim() === '') {
    errors.categories = 'Enter password';
  }
  return errors;
}
