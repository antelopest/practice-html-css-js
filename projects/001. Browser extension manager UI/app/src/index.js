import './styles/styles.scss';

const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (currentTheme) {
  console.log('Пользователь использует темную тему');
} else {
  console.log('Пользователь использует светлую тему');
}
