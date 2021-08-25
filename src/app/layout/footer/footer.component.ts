import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type Link = {
  text: string,
  url?: string,
  path?: string,
  prefix?: IconDefinition,
}
type Section = {
  label: string,
  links: Link[]
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  sections: Section[] = [
    {
      label: 'MENÚ',
      links: [
        { text: 'Inicio', path: '/inicio' },
        { text: 'Productos', path: '/productos' },
        { text: 'Quienes somos', path: '/quienes-somos' },
        { text: 'Contáctanos', path: '/contactanos' },
      ]
    },
    {
      label: 'SIGUENOS EN',
      links: [
        {
          text: 'Facebook',
          url: 'https://www.facebook.com/Entre-tarcos-y-choloncas-en-mi-chura-Tarija-113498483768763',
          prefix: faFacebookSquare
        }
      ]
    },
    {
      label: 'CONTÁCTANOS',
      links: [
        {
          text: 'WhatsApp',
          url: 'https://api.whatsapp.com/send?phone=+59175138132',
          prefix: faWhatsapp
        },
        {
          text: 'entretarcosycholoncastja@hotmail.com',
          url: 'mailto:entretarcosycholoncastja@hotmial.com',
          prefix: faEnvelope
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
