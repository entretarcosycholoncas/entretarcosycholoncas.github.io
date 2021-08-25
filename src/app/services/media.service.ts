import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  match(query: string): Observable<boolean> {
    const mediaQueryList = window.matchMedia(query);
    const matches = new BehaviorSubject<boolean>(mediaQueryList.matches);
    if (window) {
      const listener = (event: MediaQueryListEvent) => matches.next(event.matches);
      listener.bind(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
    return matches.asObservable();
  }
}
