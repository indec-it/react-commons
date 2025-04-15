import Footer from '../components/Footer.jsx';
import '../components/output.css';

export default {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

export const Default = {
  args: {
    children: '© 2024 INDEC. Todos los derechos reservados.'
  }
};

export const WithCustomText = {
  args: {
    children: 'Instituto Nacional de Estadística y Censos - República Argentina'
  }
};

export const Empty = {
  args: {
    children: ''
  }
};