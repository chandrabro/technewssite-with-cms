const newsFiles = [
  "news/2026-02-01-ai-breakthrough.md",
  "news/2026-02-02-smartphone-future.md"
];

const container = document.getElementById("news-list");

newsFiles.forEach(file => {
  fetch(file)
    .then(res => res.text())
    .then(text => {
      const lines = text.split("\n");
      const title = lines[0].replace("# ", "");
      const date = lines[1].replace("Date: ", "");
      const body = marked.parse(lines.slice(3).join("\n"));

      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <h3>${title}</h3>
        <div class="date">${date}</div>
        <div>${body}</div>
      `;
      container.appendChild(div);
    });
});
