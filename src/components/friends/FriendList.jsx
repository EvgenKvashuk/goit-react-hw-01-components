import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <span className={css.status}>{friend.isOnline}</span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};