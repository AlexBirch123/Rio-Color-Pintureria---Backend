/*import Pintureria from "./CRUD_Sucursal.2.js"
import Sucursal from "./CRUD_Sucursal.2.js"
const pint = new Pintureria;
*/
const b_new = document.getElementById('b_new');
const b_show = document.getElementById('b_show');
const b_mod = document.getElementById('b_mod');
const b_del = document.getElementById('b_del');

b_new.addEventListener('click', () => {
  //pint.creatSucursal()
  console.log('nueva sucursal');
});

b_show.addEventListener('click', () => {
  console.log('mostrar sucursal numero:');
});

b_mod.addEventListener('click', () => {
  console.log('modificar sucursal numero:');
});

b_del.addEventListener('click', () => {
  console.log('eliminar');
});

