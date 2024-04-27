import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userData}>
        <img className={css.userFoto} src={image} alt="User avatar" />
        <p className={css.userInfoSurname}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.userSocial}>
        <li className={css.userList}>
          <span className={css.userUnit}>Followers</span>
          <span className={css.userUnitValue}>{stats.followers}</span>
        </li>
        <li className={css.userList}>
          <span className={css.userUnit}>Views</span>
          <span className={css.userUnitValue}>{stats.views}</span>
        </li>
        <li className={css.userList}>
          <span className={css.userUnit}>Likes</span>
          <span className={css.userUnitValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
