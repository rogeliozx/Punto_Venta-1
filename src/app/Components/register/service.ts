

const data={
    "Productos":[
        {   "id":1,
            "Nombre":"Aceite",
            "Medida":"1lt",
            "Costo":"20$"
        },
        {   "id":2,
            "Nombre":"Consome",
            "Medida":"1pz",
            "Costo":"10$"
        },
        {   "id":3,
            "Nombre":"Azucar",
            "Medida":"1kg",
            "Costo":"30$"
        },
        {   "id":4,
            "Nombre":"Cafe",
            "Medida":"300gr",
            "Costo":"36$"
        }

    ]
};

export const consola=()=>{
    
    console.log(data);
}
export const getData=(value)=>{
 data.Productos.map((elemento)=>{
if(elemento.id===value){
    return elemento.id
}else{
    console.log("prueba");
}
 })
}