var Twitter = function() {
    this.tweets = new Map();
    this.following = new Map();
    this.timestamp = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweets.has(userId)) this.tweets.set(userId, []);
    this.tweets.get(userId).push([this.timestamp++, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let allTweets = [];
    if(this.tweets.has(userId)) allTweets.push(...this.tweets.get(userId));
    if(this.following.has(userId)) {
        for(let followee of this.following.get(userId)) {
            if(this.tweets.has(followee)) allTweets.push(...this.tweets.get(followee));
        }
    }
    return allTweets.sort((a,b) => b[0]-a[0]).slice(0,10).map(t => t[1]);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.following.has(followerId)) this.following.set(followerId, new Set());
    this.following.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.following.has(followerId)) this.following.get(followerId).delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */