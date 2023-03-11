export const data = [
  {
    type: 'text',
    label: 'Имя',
    stateName: 'name',
  },
  {
    type: 'text',
    label: 'Фамилия',
    stateName: 'lastName',
  },
  {
    type: 'date',
    label: 'Дата рождения',
    stateName: 'birthDate',
  },
  {
    type: 'tel',
    label: 'Телефон',
    stateName: 'telNumber',
  },
  {
    type: 'url',
    label: 'Сайт',
    stateName: 'website',
  },
  {
    type: 'textarea',
    label: 'О себе',
    stateName: 'about',
  },
  {
    type: 'textarea',
    label: 'Стек технологий',
    stateName: 'stack',
  },
  {
    type: 'textarea',
    label: 'Описание последнего проекта',
    stateName: 'lastProject',
  },
]

export const initialState = {
  name: '',
  lastName: '',
  birthDate: '',
  telNumber: '',
  website: '',
  about: '',
  stack: '',
  lastProject: '',
  showModal: false,
}
