import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProovedorService } from 'src/app/services/proovedor.service';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  titulo: string;
  form: FormGroup;
  constructor(private fb: FormBuilder, private _proveedorService: ProovedorService) { 
    this.titulo = 'agregar proveedor'
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
    this._proveedorService.agregarProveedor(PROVEEDOR).then(() => {
      alert('proveedor creada correctamente');
    }, error => {
      console.log(error);
    })
  }

}
