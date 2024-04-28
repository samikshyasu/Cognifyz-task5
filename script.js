const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('posts-container');

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            container.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });