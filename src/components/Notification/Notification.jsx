import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className="notification">{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
