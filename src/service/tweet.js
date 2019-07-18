import axios, {AxiosPromise} from 'axios';
import type {Tweet} from "../model/Tweet";

type Data = {
    username: string,
    quantity: number
}
const getProfileTweets = (data: Data): AxiosPromise<Array<Tweet>> => {
    return axios.post('http://localhost:5000/getUserTweets', data);
};

const tweetService = {
    getProfileTweets
};

export default tweetService;
