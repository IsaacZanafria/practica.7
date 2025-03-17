const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 

 //1 FOREACH
productos.forEach(function(array){
    console.log(`El producto: ${array.nombre}, tiene un costo de $${array.precio}`)
})



//2 MAP e INCLUDES
const productosDisponibles = productos.map(nombreProducto)
const productoBuscado = "Webcam"

console.log("Prodcutos disponibles",productosDisponibles)

function nombreProducto(array){
    const name = array.nombre
    return name
}
if(productosDisponibles.includes(productoBuscado)){
    console.log(`El producto ${productoBuscado} si esta disponible`)
}else{
    console.log(`El producto ${productoBuscado} no esta disponible`)
}



//3 MAP (descuento 10%)
const productoDescuento = productos.map(descProduct)
console.log("Precio con 10% desc:", productoDescuento)

function descProduct(array){
    const res = array.precio - array.precio/10
    return res
}



//4 Filter
const precioMenor = productos.filter(precioMin)

console.log("Productos menores a $100:",precioMenor)

function precioMin(array){
    if(array.precio < 100){
        const res = array.nombre
        return res
    }
}



//5 Slice
const primNumeros = productos.slice(0, 2)
console.log("Los dos primeros productos:",primNumeros)



//6 Sort
productos.sort(function(a, b){
    return a.precio - b.precio
})
console.log("precio de menor a mayor:",productos)



//7 reverse
const reversa = productos.reverse();
console.log("productos invertidos:", reversa);
