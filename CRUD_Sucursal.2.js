//Eventos de los botones por ID
const b_new = document.getElementById('b_new');
const b_show = document.getElementById('b_show');
const b_mod = document.getElementById('b_mod');
const b_del = document.getElementById('b_del');

b_new.addEventListener('click', () => {
  p.creatSucursal()
  console.log('nueva sucursal');
});

b_show.addEventListener('click', () => {
  let op = prompt("Ingrese ID de la sucursal");
  p.showSucursal(op);
  console.log('mostrar sucursal numero:');
});

b_mod.addEventListener('click', () => {
  p.updateSucursal();
  console.log('modificar sucursal numero:');
});

b_del.addEventListener('click', () => {
  p.delSucursal();
  console.log('eliminar');
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
      this.addSucursal(s);
      op = confirm('Desea agregar otra sucursal?');
    }
  }

  addSucursal(suc) {
    this.sucursales.push(suc);
  }

  showSucursal(idSuc) {
    let f = this.sucursales.find((sucursal) => sucursal.id === idSuc);
    if (typeof f !== undefined) {
      console.log(f);
      return 0;
    }
    console.error('No se encontro la sucursal solicitada');
  }

  searchSucursal(id) {
    let f = this.sucursales.find((sucursal) => sucursal.id === id);
    if (typeof f !== undefined) {
      return f;
    }
    return console.error('No se encontro la sucursal solicitada');
  }

  delSucursal(id) {
    const suc = this.sucursales.findIndex((sucursal) => sucursal.id === id);
    if (suc !== -1) {
      this.sucursales.splice(suc, 1);
      return console.log('Sucursal eliminada con exito');
    }
    return console.error('sucursal no encontrada');
  }

  updateSucursal(id, dir, tel) {
    const suc = this.searchSucursal(id);
    if (suc) {
      suc.direccion = dir;
      suc.telefono = tel;
      return true;
    }
    return console.error('sucursal no encontrada');
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

/*
function menu(pin) {
  let op = Number(
    prompt(
      'Ingrese una opcion\n1-Crear Sucursal\n2-Buscar Sucursal\n3-Eliminar Sucursal\n4-Actualiza Sucursal'
    )
  );
  while (0 < op && 4 >= op) {
    switch (op) {
      case 1:
        pin.creatSucursal();
        break;
      case 2:
        pin.searchSucursal(Number(prompt('Ingrese id de sucursal a buscar')));
        break;
      case 3:
        pin.delSucursal(Number(prompt('Ingrese id de sucursal a eliminar')));
        break;
      case 4:
        pin.updateSucursal(
          Number(prompt('Ingrese id de sucursal a actualizar')),
          String(prompt('Ingrese direccion')),
          Number(prompt('Ingrese telefono'))
        );
        break;
    }
    op = Number(
      prompt(
        'Ingrese una opcion\n1-Crear Sucursal\n2-Buscar Sucursal\n3-Eliminar Sucursal\n4-Actualiza Sucursal'
      )
    );
  }
}
*/


