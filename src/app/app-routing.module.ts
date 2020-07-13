import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registrar-doctor',
    loadChildren: () => import('./registrar-doctor/registrar-doctor.module').then( m => m.RegistrarDoctorPageModule)
  },
  {
    path: 'selectordoc-paciente',
    loadChildren: () => import('./selectordoc-paciente/selectordoc-paciente.module').then( m => m.SelectordocPacientePageModule)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./terminos-condiciones/terminos-condiciones.module').then( m => m.TerminosCondicionesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-paciente',
    loadChildren: () => import('./registro-paciente/registro-paciente.module').then( m => m.RegistroPacientePageModule)
  },
  {
    path: 'registro-paciente1',
    loadChildren: () => import('./registro-paciente1/registro-paciente1.module').then( m => m.RegistroPaciente1PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'especialidad',
    loadChildren: () => import('./especialidad/especialidad.module').then( m => m.EspecialidadPageModule)
  },
  {
    path: 'establecimientos-salud',
    loadChildren: () => import('./establecimientos-salud/establecimientos-salud.module').then( m => m.EstablecimientosSaludPageModule)
  },
  {
    path: 'encuentra-profesional',
    loadChildren: () => import('./encuentra-profesional/encuentra-profesional.module').then( m => m.EncuentraProfesionalPageModule)
  },
  {
    path: 'oftalmologia',
    loadChildren: () => import('./oftalmologia/oftalmologia.module').then( m => m.OftalmologiaPageModule)
  },
  {
    path: 'perfil-doctor',
    loadChildren: () => import('./perfil-doctor/perfil-doctor.module').then( m => m.PerfilDoctorPageModule)
  },
  {
    path: 'perfilclinica-doctor',
    loadChildren: () => import('./perfilclinica-doctor/perfilclinica-doctor.module').then( m => m.PerfilclinicaDoctorPageModule)
  },
  {
    path: 'perfilclinica-especialidades',
    loadChildren: () => import('./perfilclinica-especialidades/perfilclinica-especialidades.module').then( m => m.PerfilclinicaEspecialidadesPageModule)
  },
  {
    path: 'perfilclinica-servicios',
    loadChildren: () => import('./perfilclinica-servicios/perfilclinica-servicios.module').then( m => m.PerfilclinicaServiciosPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'resultados-filtro-mapa',
    loadChildren: () => import('./resultados-filtro-mapa/resultados-filtro-mapa.module').then( m => m.ResultadosFiltroMapaPageModule)
  },
  {
    path: 'busqueda-avanzada',
    loadChildren: () => import('./busqueda-avanzada/busqueda-avanzada.module').then( m => m.BusquedaAvanzadaPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
  {
    path: 'deallte-anuncio',
    loadChildren: () => import('./deallte-anuncio/deallte-anuncio.module').then( m => m.DeallteAnuncioPageModule)
  },
  {
    path: 'promos-eventos',
    loadChildren: () => import('./promos-eventos/promos-eventos.module').then( m => m.PromosEventosPageModule)
  },
  {
    path: 'mapa-establecimineto',
    loadChildren: () => import('./mapa-establecimineto/mapa-establecimineto.module').then( m => m.MapaEstableciminetoPageModule)
  },
  {
    path: 'telemedicina',
    loadChildren: () => import('./telemedicina/telemedicina.module').then( m => m.TelemedicinaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
