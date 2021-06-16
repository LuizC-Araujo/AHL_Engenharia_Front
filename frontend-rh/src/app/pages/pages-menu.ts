import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/homedashboard',
    home: true
  },
  {
    title: 'Colaborador',
    icon: 'people-outline',
    children: [
      {
        title: 'Listar',
        link: '/pages/colaborador/listar',
      },
      {
        title: 'Cadastrar',
        link: '/pages/colaborador/cadastrar',
      },
    ],
  },
  {
    title: 'Pontos',
    icon: 'checkmark-outline',
    children: [
      {
        title: 'Registrar',
        link: '/pages/pontos/registrar',
      },
      {
        title: 'Buscar',
        link: '/pages/pontos/buscar',
      },
    ],
  },
  {
    title: 'Minha Conta',
    icon: 'settings-2-outline',
    link: '/pages/minhaconta',
  }
];
