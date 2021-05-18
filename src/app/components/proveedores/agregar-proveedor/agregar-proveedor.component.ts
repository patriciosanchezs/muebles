import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProovedorService } from 'src/app/services/proovedor.service';
import { RegionComunasService } from 'src/app/services/region-comunas.service';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  titulo: string;
  form: FormGroup;
  listRegiones: any[];
  listComunas: any[];
  loading: boolean;

  constructor(private fb: FormBuilder, private _proveedorService: ProovedorService,
    private _toastr: ToastrService, private _regionComunasService: RegionComunasService) { 
    this.titulo = 'agregar proveedor';
    this.listRegiones = _regionComunasService.getRegiones();
    this.listComunas = [];
    this.loading = false;
    this.form = fb.group({
      nombre: ['', Validators.required],
      region: [''],
      comuna: [''],
      direccion: ['']
    })
  }
  ngOnInit(): void {
    
  }

  agregarProveedor(){
    const PROVEEDOR: Proveedor = {
      nombre: this.form.value.nombre,
      region: this.form.value.region,
      comuna: this.form.value.comuna,
      direccion: this.form.value.direccion,
      fechaCreacion: new Date()
    }

    this.loading = true;
    this._proveedorService.agregarProveedor(PROVEEDOR).then(() => {
      this.loading = false;
      this._toastr.success('Proveedor agregado correctamente');
      this.form.reset();
    }, error => {
      this._toastr.error('Error al ingresar proveedor');
      console.log(error);
      this.form.reset();
    })
  }

  cargarComuna(){
    this.listComunas = this._regionComunasService.getComuna(this.form.value.region);
    console.log(this.listComunas);
  }

}
