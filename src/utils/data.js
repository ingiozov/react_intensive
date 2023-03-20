export const data = [
  {
    name: 'name',
    type: 'text',
    label: 'Имя',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Фамилия',
  },
  {
    name: 'birthDate',
    type: 'date',
    label: 'Дата рождения',
  },
  {
    name: 'telNumber',
    type: 'tel',
    label: 'Телефон',
  },
  {
    name: 'website',
    type: 'url',
    label: 'Сайт',
  },
  {
    name: 'about',
    type: 'textarea',
    label: 'О себе',
  },
  {
    name: 'stack',
    type: 'textarea',
    label: 'Стек технологий',
  },
  {
    name: 'lastProject',
    type: 'textarea',
    label: 'Описание последнего проекта',
  },
]

export const initialFormData = {
  name: '',
  lastName: '',
  birthDate: '',
  telNumber: '',
  website: '',
  about: '',
  stack: '',
  lastProject: '',
}

export const initialFormErrors = {
  name: '',
  lastName: '',
  birthDate: '',
  telNumber: '',
  website: '',
  about: '',
  stack: '',
  lastProject: '',
}
