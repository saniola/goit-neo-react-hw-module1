import PropTypes from "prop-types";
import styles from "./FriendListItem.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <span className={`${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? "Online" : "Ofline"}
      </span>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
