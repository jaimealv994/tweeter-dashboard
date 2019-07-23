// @flow
import React from 'react';
import tweetService from "../../../../service/tweet";
import LoaderWrapper from "../../../UI/LoaderWrapper";
import TweetList from "../../../Tweet/List";

type Props = {
    user: string,
    quantity: number
}
const ProfileListItem = (props: Props) => {
    const [tweets, setTweets] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        tweetService.getProfileTweets({username: props.user, quantity: props.quantity}).then(result => {
            setTweets(result.data);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [props.user, props.quantity]);

    return (
        <LoaderWrapper isLoading={isLoading}>
            <h2>{props.user}</h2>
            <TweetList tweets={tweets}/>
        </LoaderWrapper>
    )
};

export default ProfileListItem
