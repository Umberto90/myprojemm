import { Component } from '@angular/core';

@Component({
  selector: 'pagina-root',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  pagetitle = 'New page!';
  getid() {
    console.log(23)
  }
}
