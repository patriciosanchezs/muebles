import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProovedorService } from 'src/app/services/proovedor.service';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css']
})
export class ListaProveedorComponent implements OnInit {

  listProveedores: Proveedor[];

  constructor(private _proveedorService: ProovedorService, 
    private _toastService: ToastrService) {
 
    this.listProveedores = [];
  }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores(): void {
    this._proveedorService.getProveedores().subscribe(proveedores => {
      this.listProveedores = [];
      proveedores.forEach((proveedor: any) => {
        this.listProveedores.push({
          id: proveedor.payload.doc.id,
          ...proveedor.payload.doc.data()
        })
      });
    })
  }

  eliminarProveedor(id: any): void {
    this._proveedorService.deleteProveedor(id).then(() => {
      this._toastService.success('Proveedor eliminado correctamente');
    }, error => {
      this._toastService.error('No se pudo eliminar proveedor');
      console.log(error);
    })
  }

}
