export type Tweet = {
    id: number,
    type: string,
    author: string,
    authorId: string,
    authorName: string,
    conversationId: number,
    hashtags: Array<string>,
    links: Array<string>,
    mentions: Array<string>,
    text: string,

    isRetweet: boolean,
    hasParent: boolean,

    timeMs: number,
    repliesCount: number,
    favoriteCount: number,
    retweetCount: number
}
