import en from './strings.en.js';
const ru = {
    'name' : 'Имя задачи',
    'isDone' : 'Завершена',
    'dueDate' : 'Дата выполнения',
    'add' : 'Добавить задачу',
    'validationError' : 'Имя и дата выполнения обязательны для заполнения.',

}
export default { ru, en: { ...ru, ...en } };