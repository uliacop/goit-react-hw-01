import css from "./FriendListItem.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.userCard}>
      <img className={css.useItem} src={avatar} alt="Avatar" width="48" />
      <p className={css.userName}>{name}</p>
      <p className={`${css.userStatus} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
