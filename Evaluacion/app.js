let users = [];

// #TAREA 2: Obtener y mostrar los datos
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    users = data;
    renderUsers(users);
  })
  .catch(error => console.error("Error al obtener usuarios:", error));

function renderUsers(usersArray) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  usersArray.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;

    // #TAREA 4: Hacer clic en un usuario para mostrar detalles
    li.addEventListener("click", () => showUserDetails(user));

    userList.appendChild(li);
  });
}

// #TAREA 3: Implementar la busqueda
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", (event) => {
  const searchText = event.target.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText)
  );

  renderUsers(filteredUsers);
});

// #TAREA 4: Mostrar detalles de un usuario
function showUserDetails(user) {
  const userDetails = document.getElementById("userDetails");
  userDetails.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Usuario:</strong> ${user.username}</p>
    <p><strong>Teléfono:</strong> ${user.phone}</p>
    <p><strong>Compañía:</strong> ${user.company.name}</p>
  `;
}
