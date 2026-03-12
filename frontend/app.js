async function create() {
  const title = document.getElementById("title").value;
  const secret = document.getElementById("secret").value;

  await fetch("/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, secret }),
  });

  load();
}

async function load() {
  const res = await fetch("/api/list");

  const data = await res.json();

  const container = document.getElementById("list");

  container.innerHTML = "";

  data.forEach((d) => {
    container.innerHTML += `<div><p>${d.title}</p><button onClick={deleteData(${d.id})}>Del</button></div>`;
  });
}

async function deleteData(id) {
  await fetch(`/api/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  load();
}

load();
