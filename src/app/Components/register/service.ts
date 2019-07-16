


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
export async function getData(number) {
    let element;
    data.Productos.map((elemento) => {
        if (elemento.id === number) {
            element = elemento;
            return;

        }
    })

    return element;
}