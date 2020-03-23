import { IProcessItem } from '../models/process-item-card.model';

export const processItems: IProcessItem[] = [
  {
    svgSrc: '/assets/images/mail.png',
    title: 'Fill out our questionnaire',
    body:
      'A short set of design-focused questions so we can get an idea about your business & style',
  },
  {
    svgSrc: '/assets/images/bulb.png',
    title: 'We start working our magic',
    body:
      "We'll carefully review your answers, and translate that into a beautifully designed website.",
  },
  {
    svgSrc: '/assets/images/screen.png',
    title: 'Your website goes live',
    body:
      "Once you've approved your new website, we'll push it live for the world to see & love.",
  },
];
