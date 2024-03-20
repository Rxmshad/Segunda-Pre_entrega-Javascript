let productos = [
    {
        nombre: "arroz",
        id: 1,
        categoria: "alimento",
        precio: 200
    },
    {
        nombre: "harina",
        id: 20,
        categoria: "alimento",
        precio: 150
    },
    {
        nombre: "lavandina",
        id: 14,
        categoria: "limpieza",
        precio: 250
    },
    {
        nombre: "fideos",
        id: 56,
        categoria: "alimento",
        precio: 100
    },
    {
        nombre: "jabon",
        id: 89,
        categoria: "limpieza",
        precio: 130
    },
    {
        nombre: "desodorante de ambiente",
        id: 3,
        categoria: "limpieza",
        precio: 220
    },
    {
        nombre: "gaseosa",
        id: 67,
        categoria: "bebidas",
        precio: 300
    },
    {
        nombre: "agua",
        id: 57,
        categoria: "bebidas",
        precio: 170
    },
    {
        nombre: "polenta",
        id: 13,
        categoria: "alimento",
        precio: 180
    }
]

let carrito = []

inicio()

function inicio() {


    let compra = Number(prompt("Bienvenido a la tienda!\n¿Qué desea ver?\n1- Todos los productos\n2-Productos mas baratos\n3-Buscar por categorias\n4-Ver el carrito\n0-Salir"))
    do {
        if (compra === 1) {
            listProductos()
        } else if (compra === 2) {
            preciosMin()
        } else if (compra === 3) {
            categorias()
        } else if (compra === 4) {
            finalizarCompra()
        }
    } while (compra === 0)

}


function listProductos(disponibles) {
    disponibles = "Productos disponibles\nSeleccione ID del producto que desea\nID - Producto - Precio \n"
    productos.forEach(element => {
        disponibles = disponibles + element.id + " - " + element.nombre + " " + element.precio + "$" + "\n"
    });
    let todosDisponibles = Number(prompt(disponibles))
    do {
        if (todosDisponibles === 1 || todosDisponibles === 56 || todosDisponibles === 20 || todosDisponibles === 14 || todosDisponibles === 89 || todosDisponibles === 3 || todosDisponibles === 67 || todosDisponibles === 57 || todosDisponibles === 13) {

            let seleccionado = productos.find(prod => prod.id === todosDisponibles)
            carrito.push({
                nombre: seleccionado.nombre,
                precio: seleccionado.precio
            })
            alert("Se agrego el producto a su carrito")
        } else {
            alert("no ha seleccionado un producto")
        }
    } while (todosDisponibles === 0);
    inicio()
}

function preciosMin(baratos) {
    productos.sort((a, b) => a.precio - b.precio)
    baratos = "Productos ordenados por precio"
    productos.forEach(element => {
        baratos = baratos + "\n" + element.id + " - " + element.nombre + " " + element.precio + "$"
    })
    let precioMin = Number(prompt(baratos))
    do {
        if (precioMin === 1 || precioMin === 57 || precioMin === 20 || precioMin === 14 || precioMin === 89 || precioMin === 3 || precioMin === 67 || precioMin === 56 || precioMin === 13) {

            let seleccionado = productos.find(prod => prod.id === precioMin)
            carrito.push({
                nombre: seleccionado.nombre,
                precio: seleccionado.precio
            })
            alert("Se agrego el producto a su carrito")
        } else {
            alert("No ha seleccionado un producto")
        }
    } while (precioMin === 0);
    inicio()
}


function categorias() {
    let busqueda = Number(prompt("Seleccione la categoria que desea buscar\n1-Alimento\n2-Limpieza\n3-Bebidas"))
    do {

        if (busqueda === 1) {
            filtroAlimentos()
        } else if(busqueda === 2) {
            filtroLimpieza()
        } else if(busqueda === 3) {
            filtroBebidas()
        }
    } while (busqueda === 0)
}

function filtroAlimentos() {
    let alimento = "Ha Seleccionado alimentos "
    let filtrado = productos.filter(prod => (prod.categoria === "alimento"))
    filtrado.forEach(element => {
        alimento = alimento + "\n" + element.id + " - " + element.nombre + " " + element.precio + "$"
    })
    let filtroAlimentos = Number(prompt(alimento))
    do {

        if (filtroAlimentos === 1 || filtroAlimentos === 20 || filtroAlimentos === 56 || filtroAlimentos === 13) {
            let seleccionado = productos.find(prod => prod.id === filtroAlimentos)
            carrito.push({
                nombre: seleccionado.nombre,
                precio: seleccionado.precio
        })
        alert("Se agrego el producto a su carrito")
        } else {
            alert("No ha selecionado ningun producto")
        }
    } while (filtroAlimentos === 0);
    inicio()
}

function filtroLimpieza() {
    let limpieza = "Ha seleccionado limpieza"
    let filtrado = productos.filter(prod => (prod.categoria === "limpieza"))
    filtrado.forEach(element => {
        limpieza = limpieza + "\n" + element.id + " - " + element.nombre + " " + element.precio + "$"
    })
    let filtroLimpieza = Number(prompt(limpieza))
    do {
        if (filtroLimpieza === 14 || filtroLimpieza === 89 || filtroLimpieza === 3) {
            let seleccionado = productos.find(prod => prod.id === filtroLimpieza)
            carrito.push({
                nombre: seleccionado.nombre,
                precio: seleccionado.precio
            })
            alert("Se agrego el producto a su carrito")
        } else {
            alert("no ha seleccionado ningun producto")
        }
    } while (filtroLimpieza === 0)
    inicio()
}

function filtroBebidas() {
    let bebidas = "Ha seleccionado bebidas"
    let filtrado = productos.filter(prod => (prod.categoria === "bebidas"))
    filtrado.forEach(element => {
        bebidas = bebidas + "\n" + element.id + " - " + element.nombre + " " + element.precio + "$"
    })
    let filtroBebidas = Number(prompt(bebidas))
do {
    if (filtroBebidas === 57 || filtroBebidas === 67) {
        let seleccionado = productos.find(prod => prod.id === filtroBebidas)
        carrito.push({
            nombre: seleccionado.nombre,
            precio: seleccionado.precio
        })
        alert("Se agrego el producto a su carrito")
    } else {
        alert("No ha seleecionado ningun producto")
    }
} while (filtroBebidas === 0);
inicio()
}

function finalizarCompra() {
    let fin = "Su carrito contiene: "
    let valor = carrito.reduce((acc, element) => acc + element.precio, 0)
    carrito.forEach(element => {
        fin = fin  + "\n" + element.nombre + " " + element.precio + "$"})
        alert(fin)
        alert("Su compra cuesta " + valor + "$")
        let compra = Number(prompt("1-Confirmar compra\n0-Cancelar y salir"))
    if (compra === 1) {
        alert("Gracias por su compra!")
    } else if(compra === 0) {
        alert("Gracias, vuelva pronto!")
    }
}