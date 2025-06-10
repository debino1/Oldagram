const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedEl = document.getElementById('feed')



function renderposts(postFeed){
    let feedItems = ""
    for (let i = 0; i < postFeed.length; i++) {
        feedItems += `
        <div class="container">
            <div class="account">
                <img src="${postFeed[i].avatar}" class="avatar">
                <div class="user-info">
                    <p class="name">${postFeed[i].name}</p>
                    <p class="location">${postFeed[i].location}</p>
                </div>
            </div>
            <img src="${postFeed[i].post}" class="post">
            <div class="icons">
                <a href="#"><img src="images/icon-heart.png"></a>
                <a href="#"><img src="images/icon-comment.png"></a>
                <a href="#"><img src="images/icon-dm.png"></a>
            </div>
            <p class="likes">${postFeed[i].likes} likes</p>
            <div class="comment-section">
                <p class="username">${postFeed[i].username}</p>
                <p class="comment">${postFeed[i].comment}</p>
            </div>
       </div>
        `
    }
    
    feedEl.innerHTML = feedItems
    
}

renderposts(posts)

