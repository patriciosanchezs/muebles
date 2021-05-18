import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProovedorService {

  private proveedor$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  agregarProveedor(proveedor: Proveedor): Promise<any> {
    return this.firestore.collection('proveedores').add(proveedor);
  }
}
