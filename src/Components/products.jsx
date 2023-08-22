

const productos = [
    { 
    title: "GUITARRA ELECTRICA",
    id: 1,
    price: 20, 
    stock: 1, 
    categoria: "cuerdas",    
    image:"https://picsum.photos/id/639/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"
    },
    {
    title: "BAJO ELECTRICO",
    id: 2, 
    price: 30, 
    stock: 2 , 
    categoria: "cuerdas",    
    image: "https://picsum.photos/id/389/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"
    },
    { 
    title: "BATERIA",
    id: 3,
    price: 50,
    stock: 2 ,
    categoria: "percusion",    
    image: "https://picsum.photos/id/549/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"

    }, 
    {
    title: "ARMONICA",
    id: 4,
    price: 10,
    stock: 4, 
    categoria: "vientos",    
    image: "https://picsum.photos/id/739/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"

    },
    {
    title: "PANDERO",
    id: 5,
    price: 15,
    stock: 9, 
    categoria: "percusion", 
    image: "https://picsum.photos/id/349/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"

    },
    { 
    title: "DJEMBE",
    id: 6,
    price: 20, 
    stock: 3, 
    categoria: "percusion",    
    image: "https://picsum.photos/id/31/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"
    
    },
    { 
    title: "GUITARRA ACUSTICA",
    id: 7,
    price: 45, 
    stock: 2,
    categoria: "cuerdas",    
    image: "https://picsum.photos/id/145/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"
    
    },
    { 
    title: "BAJO ACUSTICO",
    id: 8,
    price: 20, 
    stock: 4, 
    categoria: "cuerdas",    
    image: "https://picsum.photos/id/39/200/",
    descripcion: "lorem ipsum dolor sit amet, consect"
    }
   
  ]

  export const idProductos = (itemId) => {
    return new Promise((resolve) => {
       resolve(productos.find((producto) => producto.id === itemId))

    })
}

export default productos;