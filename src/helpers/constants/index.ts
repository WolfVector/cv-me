import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
  {
    backgroundColor: 'black',
    fontColor: 'white',
    titleColor: 'white',
    highlighterColor: 'white',
    id: 4,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#b4b387',
    highlighterColor: '#F556E5',
    id: 5,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('src/templates/modern/MordernTemplate'), {
      ssr: false,
    }),
  },
  modern2: {
    id: 'modern2',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('src/templates/modern2/MordernTemplate'), {
      ssr: false,
    }),
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('src/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
