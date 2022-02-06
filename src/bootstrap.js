module.exports = async () => {
    const Tweet  = require('./models/Tweet');
    const User = require('./models/User');

    const errHandler = (err) => {
        console.error("Error: ", err);
    }

    const user = await User.create({ username: 'alexdmc', passwd: '1234567890'}).catch(errHandler);

    const tweet = await Tweet.create({ content: 'This is actually the tweet content Tweeted from Iphone', userId: user.id}).catch(errHandler);
    


}