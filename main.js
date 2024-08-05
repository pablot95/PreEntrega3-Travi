
let datosArray = JSON.parse(localStorage.getItem("data")) || [];

let entrada1 = document.getElementById('addDataButton');
let entrada2 = document.getElementById('addDataButton2');

entrada1.addEventListener('click', function() {
    agregarDato('Taylor Swift');
});

entrada2.addEventListener('click', function() {
    agregarDato('Metallica');
});

function agregarDato(evento) {
    let data = Number(prompt(`Ingrese un número de entradas para ${evento}:`));
    if (!isNaN(data) && data > 0) {
        let eventoExistente = datosArray.find(item => item.evento === evento);

        if (eventoExistente) {
            eventoExistente.data += data;
        } else {
            datosArray.push({ evento, data });
        }

        actualizarLista();
    } else {
        alert("Por favor, ingrese un número válido.");
    }
    localStorage.setItem("data", JSON.stringify(datosArray));
}

function actualizarLista() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; 

    datosArray.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `Cantidad de entradas para ${item.evento}: ${item.data}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            eliminarDato(index);
        });

        let incrementButton = document.createElement('button');
        incrementButton.textContent = 'Agregar entradas';
        incrementButton.classList.add('increment-button');
        incrementButton.addEventListener('click', function() {
            incrementarDato(index);
        });
        listItem.appendChild(incrementButton);
        listItem.appendChild(deleteButton);
        dataList.appendChild(listItem);
    });
    localStorage.setItem("data", JSON.stringify(datosArray));
}

function eliminarDato(index) {
    datosArray.splice(index, 1);
    actualizarLista();
    localStorage.setItem("data", JSON.stringify(datosArray));
}

function incrementarDato(index) {
    datosArray[index].data += 1;
    actualizarLista();
    localStorage.setItem("data", JSON.stringify(datosArray));
}

actualizarLista();