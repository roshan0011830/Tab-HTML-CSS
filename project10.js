console.log("hello project 10");

let Home = document.getElementById("Home");
let Blog = document.getElementById("Blog");
let Help = document.getElementById("Help");
let Code = document.getElementById("Code");
let About = document.getElementById("About");

let heading = document.getElementById("heading");
let para = document.getElementById("para");

Blog.addEventListener("click", displayBlog);
Help.addEventListener("click", displayHelp);
Code.addEventListener("click", displayCode);
About.addEventListener("click", displayAbout);
Home.addEventListener("click", displayHome);

function displayBlog() {
    heading.innerHTML = "Blog Content";
    para.innerHTML = "Learning JavaScript can change your tech journey completely. It’s the language of the web — from making simple buttons interactive to building full web apps, JavaScript does it all. Whether you're dreaming of becoming a frontend developer or planning to dive into full-stack, JavaScript is the key. It works with HTML and CSS like magic, creating powerful user experiences. Plus, it's beginner-friendly, with huge community support. Start small, build projects, and slowly level up. Mastering JavaScript opens doors to freelancing, jobs, and your creative freedom online."

}

function displayHelp() {
    heading.innerHTML = "Help Content";
    para.innerText = "Everyone needs help sometimes, especially when learning something new like coding or web development. Whether you're stuck on a bug, confused about a concept, or just need guidance on what to learn next, asking for help is a sign of growth. Communities like Stack Overflow, Discord servers, YouTube tutorials, or even AI tools like Chiku can give you support instantly. Never hesitate to seek help—it's how we improve faster and avoid frustration. Remember, every expert was once a beginner who asked questions. Stay curious, keep experimenting, and ask whenever you're stuck. You're never alone in your journey."

}

function displayCode() {
    heading.innerHTML = "Code";
    para.innerHTML = "Coding is not just about writing lines of syntax; it's about solving real-world problems with logic, creativity, and structure. Whether you're building a website, a mobile app, or automating a task, code helps turn ideas into digital reality. HTML lays the foundation, CSS adds style, and JavaScript brings interactivity. Learning to code empowers you to think critically, break down problems, and create solutions from scratch. It requires patience and consistent practice, but every bug fixed is a step closer to mastery. Keep building, keep debugging, and enjoy the journey of becoming a coder.";
}

function displayAbout() {
    heading.innerHTML = "About";
    para.innerHTML = "This website is designed to help beginners and self-learners build a solid foundation in web development. From understanding basic HTML and CSS to diving into JavaScript logic, we aim to make learning simple and enjoyable. Whether you’re creating your first login form or exploring dynamic projects, every section here guides you step-by-step. We believe that anyone, with the right motivation and resources, can become a developer. No fancy degrees required—just consistency, curiosity, and a willingness to keep going. This platform exists to turn effort into skill and knowledge into confidence.";
}

function displayHome() {
    heading.innerHTML = "Home Content";
    para.innerHTML = "Welcome to our web development hub! This is the place where your journey begins—from basic web design to interactive projects. Whether you’re just starting out or brushing up your skills, everything is laid out in a clear, beginner-friendly way. Explore HTML, CSS, and JavaScript through examples, tips, and mini-projects. This platform is not just for learning but for growing—one line of code at a time. Bookmark this space, come back often, and keep building. Remember, even the best developers once started with a blank page—just like you. Let’s code your future together!";
}

