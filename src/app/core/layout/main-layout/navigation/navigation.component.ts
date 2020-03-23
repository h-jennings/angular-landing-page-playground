import { Component } from '@angular/core';
import { INavigationItem } from './navigation.component.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navigationItems: INavigationItem[] = [
    { text: 'our work', href: 'our-work' },
    { text: 'our process', href: 'our-process' },
    { imgSrc: '/assets/logo.png', href: '' },
    { text: 'features', href: 'features' },
    { text: 'pricing', href: 'pricing' },
  ];
}
