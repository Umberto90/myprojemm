import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'newpage', component: PaginaComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
