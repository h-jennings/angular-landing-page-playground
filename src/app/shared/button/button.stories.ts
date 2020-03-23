import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
};

export const Dark = () => ({
  component: ButtonComponent,
  props: {
    text: 'My Button',
    styleVariant: 'primary-dark',
  },
});

export const Light = () => ({
  component: ButtonComponent,
  props: {
    text: 'My Button',
    styleVariant: 'primary-light',
  },
});

export const InvalidVariant = () => ({
  component: ButtonComponent,
  props: {
    text: 'My Button',
    styleVariant: 'Blah',
  },
});
