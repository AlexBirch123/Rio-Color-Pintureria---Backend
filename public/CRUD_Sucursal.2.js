//Eventos de los botones por ID
const b_new = document.getElementById('b_new');
const b_show = document.getElementById('b_show');
const b_mod = document.getElementById('b_mod');
const b_del = document.getElementById('b_del');

b_new.addEventListener('click', () => {
  p.creatSucursal();
  console.log('nueva sucursal');
});

b_show.addEventListener('click', () => {
  //
  p.showSucursal();
  // console.log('mostrar sucursal numero:');
});

b_mod.addEventListener('click', () => {
  let op = Number(prompt('Ingrese ID de la sucursal'));
  p.updateSucursal(op);
  console.log('Se modifico una sucursal');
});

b_del.addEventListener('click', () => {
  let op = Number(prompt('Ingrese ID de la sucursal'));
  p.delSucursal(op);
  console.log('eliminada');
});

//Creacion de Clases y metodos

class Pintureria {
  sucursales = [];
  nombre;
  constructor(nombre) {
    this.nombre = nombre;
  }

  creatSucursal() {
    let op = true;
    while (op) {
      let id = this.sucursales.length + 1;
      let direc = prompt('Ingrese direccion de la sucursal');
      if (direc === null) {
        while (direc === null) {
          console.log('Complete el campo direccion');
          direc = prompt('Ingrese direccion de la sucursal');
        }
      }
      let tel = prompt('Ingrese telefono de la sucursal');
      const s = new Sucursal(id, direc, tel);
      console.log(s);
      this.sucursales.push(s); // agrega nueva sucursal al array sucursales
      op = confirm('Desea agregar otra sucursal?');
    }
  }

  showSucursal() {
    // Muestra las sucursales cargadas
    this.sucursales.forEach((sucursal) => console.log(sucursal));
  }

  /*
  showSucursal(idSuc) {
    let f = this.sucursales.find((sucursal) => sucursal.id === idSuc);
    if (typeof f !== undefined) {
      console.log(f);
      return 0;
    }
    console.error('No se encontro la sucursal solicitada');
  }
*/
  searchSucursal(idsuc) {
    //Busca una sucursal por id
    const f = this.sucursales.find((sucursal) => sucursal.id === idsuc);
    console.log(f);
    return f;
  }

  delSucursal(id) {
    //Elimina una sucursal
    const suc = this.sucursales.findIndex((sucursal) => sucursal.id === id);
    if (suc !== -1) {
      this.sucursales.splice(suc, 1);
      return console.log('Sucursal eliminada con exito');
    } else console.error('sucursal no encontrada');
    return 0;
  }

  updateSucursal(id) {
    //Actualiza una sucursal
    const suc = this.searchSucursal(id);
    console.log(suc);
    if (suc !== undefined) {
      suc.direccion = prompt('Ingrese direccion de la sucursal');
      suc.telefono = prompt('Ingrese telefono de la sucursal');
      console.log(suc);
      return 0;
    } else console.error('sucursal no encontrada');
    return 0;
  }
}

class Sucursal {
  id;
  direccion;
  telefono;
  productos = [];
  constructor(id, direccion, telefono) {
    this.id = id;
    this.direccion = direccion;
    this.telefono = telefono;
  }
}

const p = new Pintureria('Rio Color');
