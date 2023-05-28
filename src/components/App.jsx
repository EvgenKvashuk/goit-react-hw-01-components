import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friends/FriendList"
import { TransactionHistory } from "./transaction/TransactionHistory";

import user from "./profile/user";
import data from "./statistics/data";
import friends from "./friends/friends";
import transactions from "./transaction/transactions";

export const App = () => {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                imgUrl={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}; 

