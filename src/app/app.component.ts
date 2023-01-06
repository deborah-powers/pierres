import { Component, Input } from '@angular/core';

@Component({
  selector: 'pierre-details',
  templateUrl: './app.details.html',
})
export class PierreDetails {
  @Input() nom = 'emeraude'
  @Input() couleur = 'vert'
  @Input() transparence = 'transparente'
  taille = 'coussin'
  poids = 12
  prix = 400
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pierres'
}