


const data = {
    "Productos": [
        {
            "id": 1,
            "nombre": "Aceite",
            "costo": "20$",
            "medida": "1lt"
        },
        {
            "id": 2,
            "nombre": "Consome",
            "costo": "10$",
            "medida": "1pz"
        },
        {
            "id": 3,
            "nombre": "Azucar",
            "costo": "30$",
            "medida": "1kg",
        },
        {
            "id": 4,
            "nombre": "Cafe",
            "costo": "36$",
            "medida": "300gr"
        }

    ]
};

export const consola = () => {

    console.log(data);
}
export async function getDataById(number) {
    let element;
    data.Productos.map((elemento) => {
        if (elemento.id === (number)) {
            element = elemento;
            return;

        }
    })

    return element;
}
export async function getDataByName(name) {
    
  let search= name.charAt(0).toUpperCase() + name.slice(1);
  
    console.log(search);
    let element;
    data.Productos.map((elemento) => {
        if (elemento.nombre === search) {
            element = elemento;
            return;

        }
    })

    return element;
}