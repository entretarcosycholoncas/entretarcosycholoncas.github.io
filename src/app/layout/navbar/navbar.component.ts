import { Component, OnInit } from '@angular/core';
import { MediaService } from '@services/media.service';

type ListItem = {
  text: string,
  path: string,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  mediaMatches = false;

  listItems: ListItem[] = [
    { text: 'INICIO', path: '/inicio' },
    { text: 'PRODUCTOS', path: '/productos' },
    { text: 'QUIENES SOMOS', path: '/quienes-somos' },
    { text: 'CONTACTÁNOS', path: '/contactanos' },
  ]

  constructor(
    private mediaService: MediaService,
  ) { }

  ngOnInit(): void {
    this.mediaService.match('(min-width: 600px)')
    .subscribe(resp => this.mediaMatches = resp);
  }

}
