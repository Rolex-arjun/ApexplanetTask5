const posts = [
  {
    title: "Welcome to the Capstone Project!",
    content: "This is your final frontend project with blog functionality and a polished UI."
  },
  {
    title: "Login & Register UIs",
    content: "Implemented using only HTML and CSS, perfect for frontend-only presentations."
  }
];

const container = document.getElementById("post-container");
if (container) {
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(div);
  });
}
