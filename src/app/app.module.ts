import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

//COMPONENTES
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedorComponent } from './components/proveedores/agregar-proveedor/agregar-proveedor.component';
import { ListaProveedorComponent } from './components/proveedores/lista-proveedor/lista-proveedor.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AgregarVentaComponent } from './components/ventas/agregar-venta/agregar-venta.component';
import { ListarVentasComponent } from './components/ventas/listar-ventas/listar-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProveedoresComponent,
    AgregarProveedorComponent,
    ListaProveedorComponent,
    VentasComponent,
    AgregarVentaComponent,
    ListarVentasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
