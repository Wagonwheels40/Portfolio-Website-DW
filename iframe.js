axios.get("https://api.github.com/users/wagonwheels40/repos")
.then(response => {
  const repositories = response.data;
  const repositoriesContainer = document.getElementById("repositories");

  repositories.forEach(repository => {
    const repoElement = document.createElement("div");
    repoElement.innerHTML = `
      <h3>${repository.name}</h3>
      <a href="${repository.html_url}" target="_blank">View on GitHub</a>
      <hr>
    `;
    repositoriesContainer.appendChild(repoElement);
  });
})
.catch(error => {
  console.error("Failed to fetch repositories from GitHub API:", error);
});
