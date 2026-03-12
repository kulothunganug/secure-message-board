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
    const wrapper = document.createElement("div");
    wrapper.className = "message-item";

    const p = document.createElement("p");
    p.textContent = d.title;

    const btn = document.createElement("button");
    btn.textContent = "Del";

    btn.addEventListener("click", () => {
      deleteData(d.id);
    });

    wrapper.appendChild(p);
    wrapper.appendChild(btn);

    container.appendChild(wrapper);
  });
}

async function deleteData(id) {
  await fetch(`/api/delete/${id}`, {
    method: "DELETE",
  });

  load();
}

load();
