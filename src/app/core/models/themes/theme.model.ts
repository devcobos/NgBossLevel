export interface CustomTheme {
  id: string;
  class: string;
  displayableName: string;
}

export const LightThemes = Object.freeze<CustomTheme[]>([
  {
    id: 'azure-blue-light',
    class: 'azure-blue-light-theme',
    displayableName: 'Azure Blue',
  },
  {
    id: 'red-cyan-light',
    class: 'red-cyan-light-theme',
    displayableName: 'Red Cyan',
  },
  {
    id: 'green-magenta-light',
    class: 'green-magenta-light-theme',
    displayableName: 'Green Magenta',
  },
  {
    id: 'blue-orange-light',
    class: 'blue-orange-light-theme',
    displayableName: 'Blue Orange',
  },
  {
    id: 'yellow-violet-light',
    class: 'yellow-violet-light-theme',
    displayableName: 'Yellow Violet',
  },
  {
    id: 'chartreuse-spring-green-light',
    class: 'chartreuse-spring-green-light-theme',
    displayableName: 'Chartreuse SpringGreen',
  },
]);

export const DarkThemes = Object.freeze<CustomTheme[]>([
  {
    id: 'cyan-orange-dark',
    class: 'cyan-orange-dark-theme',
    displayableName: 'Cyan Orange',
  },
  {
    id: 'magenta-chartreuse-dark',
    class: 'magenta-chartreuse-dark-theme',
    displayableName: 'Magenta Chartreuse',
  },
  {
    id: 'rose-yellow-dark',
    class: 'rose-yellow-dark-theme',
    displayableName: 'Rose Yellow',
  },
  {
    id: 'violet-azure-dark',
    class: 'violet-azure-dark-theme',
    displayableName: 'Violet Azure',
  },
  {
    id: 'spring-green-blue-dark',
    class: 'spring-green-blue-dark-theme',
    displayableName: 'Spring Green Blue',
  },
  {
    id: 'orange-red-dark',
    class: 'orange-red-dark-theme',
    displayableName: 'Orange Red',
  },
]);
