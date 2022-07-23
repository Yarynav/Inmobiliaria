/**
 * @param {object} e
 * @returns {string}
 * @description agregamos datos del objeto y retornamos en html
 */

const card = (e) => {
  const cards = `<div class="propiedad">
  <div
    class="img"
    style="
      background-image: url('${e.src}');
    "
  ></div>
  <section>
    <h5>${e.name}</h5>
    <div class="d-flex justify-content-between">
      <p>Cuartos: ${e.rooms}</p>
      <p>Metros: ${e.m}</p>
    </div>
    <p class="my-3">${e.description}</p>
    <button class="btn btn-info">Ver más</button>
  </section>
</div>`;
  return cards;
};

/**
 * @description recorremos el arreglo de objeto y retornamos las card
 */
const returnCard = () => {
  let empty = "";
  propiedadesJSON.forEach((e) => {
    empty += card(e);
    document.querySelector(".propiedades").innerHTML = empty;
  });
  document.querySelector("#counter").innerHTML = propiedadesJSON.length;
};
returnCard();

/**
 * @description validamos los campos del boton si estan todos los datos filtraremos y si no mostrara un alert señalando que faltan campos
 */
const search = () => {
  let rooms = document.querySelector("#rooms").value;
  let fromMeters = document.querySelector("#meters-from").value;
  let toMeters = document.querySelector("#meters-to").value;
  if (rooms.length === 0 || fromMeters.length === 0 || toMeters.length === 0) {
    alert("Faltan Campos Por llenar");
  } else {
    filterCards(Number(rooms), Number(fromMeters), Number(toMeters));
  }
};

/**
 * @param {number} rooms
 * @param {number} fromMeters
 * @param {number} toMeters
 * @description en esta funcion filtramos las propierdades
 */
const filterCards = (rooms, fromMeters, toMeters) => {
  let empty = "";
  let filtrardatos = propiedadesJSON.filter((e) => {
    return e.rooms === rooms && e.m >= fromMeters && e.m <= toMeters;
  });

  filtrardatos.forEach((e) => {
    empty += card(e);
    document.querySelector(".propiedades").innerHTML = empty;
  });
  document.querySelector("#counter").innerHTML = filtrardatos.length;
};

document
  .querySelector("#btn-search")
  .addEventListener("click", search, filterCards);
