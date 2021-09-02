import { Component, OnInit } from '@angular/core';
import { faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type Contact = {
  label: string,
  value: string,
  prefix?: IconDefinition,
  url?: string,
}

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
  contacts: Contact[] = [
    {
      label: 'Número de contacto',
      value: '+59175138132',
      prefix: faWhatsapp,
      url: 'https://api.whatsapp.com/send?phone=+59175138132'
    },
    {
      label: 'Correo electrónico',
      value: 'entretarcosycholoncastja@hotmail.com',
      prefix: faEnvelope,
      url: 'mailto:entretarcosycholoncastja@hotmial.com'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
