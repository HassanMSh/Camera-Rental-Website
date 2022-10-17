import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { CameraComponent } from './camera/camera.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LightingComponent } from './lighting/lighting.component';
import { ServicesComponent } from './services/services.component';
import { SoundComponent } from './sound/sound.component';
import { StudioComponent } from './studio/studio.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
    { path: 'allservices', component: AllservicesComponent },
    { path: 'allservices/services', component: ServicesComponent },
    { path: 'allservices/lighting', component: LightingComponent },
    { path: 'allservices/sound', component: SoundComponent },
    { path: 'allservices/camera', component: CameraComponent },
    { path: 'allservices/studio', component: StudioComponent },
  { path: 'allservices/accessories', component: AccessoriesComponent },
  { path: 'table', component: TableComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
