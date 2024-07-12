//redirigir a una pagina con JS
function redirigir(nuevaPagina) {
  window.location.href = nuevaPagina;
}

//Eventos de los botones por ID
const b_sucursal = document.getElementById('suc');
const b_clientes = document.getElementById('clien');
const b_prod = document.getElementById('prod');
const b_prov = document.getElementById('prov');
const b_emp = document.getElementById('emp');
const b_ventas = document.getElementById('ven');

b_sucursal.addEventListener('click', () => {
  redirigir('/sucursales');
});

b_clientes.addEventListener('click', () => {
  redirigir('/clientes');
});

b_prod.addEventListener('click', () => {
  redirigir('/productos');
});

b_prov.addEventListener('click', () => {
  redirigir('/proveedores');
});

b_emp.addEventListener('click', () => {
  redirigir('/empleados');
});

b_ventas.addEventListener('click', () => {
  redirigir('/ventas');
});
