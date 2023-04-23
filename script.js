const username = "Wagonwheels40";
const url = `https://api.github.com/users/${username}/repos?type=owner&sort=stars&direction=desc`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#project-table tbody");
    data.forEach(item => {
      if (item.language === "JavaScript") {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = item.description || "No description provided.";
        row.appendChild(descriptionCell);
        const starsCell = document.createElement("td");
        starsCell.textContent = item.stargazers_count.toLocaleString();
        row.appendChild(starsCell);
        const forksCell = document.createElement("td");
        forksCell.textContent = item.forks_count.toLocaleString();
        row.appendChild(forksCell);
        tableBody.appendChild(row);
      }
    });
  })
  .catch(error => console.error(error));