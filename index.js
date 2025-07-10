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

const avatarEl = document.getElementById("avatar")
const nameEl = document.getElementById("name")
const postEl = document.getElementById("post")
const usernameEl = document.getElementById("username")
const likesEl = document.getElementById("likes")
const iconHeartEl = document.getElementById("icon-heart")
const nextPostBtn = document.getElementById("btn-nextpost")

let currentPost = 0

function renderPost() {
    const post = posts[currentPost]
    avatarEl.src = post.avatar
    nameEl.innerHTML = `${post.name}<span>${post.location}</span>`
    postEl.src = post.post
    usernameEl.innerHTML = `${post.username} <span>${post.comment}</span>`
    likesEl.textContent = `${post.likes} likes`
}

renderPost()

nextPostBtn.addEventListener("click", function() {
    currentPost++
    if (currentPost >= posts.length) {
        currentPost = 0
    }
    renderPost()
})

function addLike() {
    let currentLikes = likesEl.textContent.split(" ")[0]
    currentLikes = parseInt(currentLikes) + 1
    likesEl.textContent = `${currentLikes} likes`
}

iconHeartEl.addEventListener("click", function() {
    addLike()
})

postEl.addEventListener("dblclick", function() {
    addLike()
})