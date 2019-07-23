import React from 'react';
import type {Tweet} from "../../../model/Tweet";

type Props = {
    tweets: Array<Tweet>
}


const TweetList = (props: Props) => {
    return (
        <ul>
            {props.tweets.map(tweet => {
                return <li>
                    {tweet.text}
                </li>
            })}
        </ul>
    )
};

export default TweetList;
