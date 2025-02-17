// filepath: /c:/Users/DELL/OneDrive/Desktop/my blog/my-blog-website-1/public/script.js
const API_URL = "http://localhost:5000/api/posts"; // Change to your server URL

async function fetchPosts() {
    const res = await fetch(API_URL);
    const posts = await res.json();
    document.getElementById("posts").innerHTML = posts
        .map((post) => `
            <div>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button onclick="deletePost('${post._id}')">Delete</button>
            </div>
        `)
        .join("");
}

async function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
    });

    fetchPosts();
}

async function deletePost(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchPosts();
}

// Load posts when the page loads
fetchPosts();