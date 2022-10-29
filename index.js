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

const likeEl = document.getElementById("like-btn")
const likeNumEl = document.getElementById("like-num")
const msgEl = document.getElementById("msg-btn")
const shareEl = document.getElementById("shre-btn")


likeEl.addEventListener("click",function(){
    likeEl.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Love_Heart_symbol_inglow.svg/1111px-Love_Heart_symbol_inglow.svg.png"
    likeNumEl.innerHTML = "21,493 likes"
    
})
msgEl.addEventListener("click",function(){
    msgEl.src = "https://as1.ftcdn.net/v2/jpg/01/78/55/76/1000_F_178557658_fDprv0T1CowcobKAPo1SGJOoC3ocOnHt.jpg"
    
    
})
