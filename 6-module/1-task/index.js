/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    // создание таблицы
    this.elem = document.createElement('table');
    this.tHead = document.createElement('thead');
    this.tBody = document.createElement('tbody');
    
   this.tHead.innerHTML = `
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
   `
   this.elem.append(this.tHead);

   for (let row of rows) {
       let tbodyRow = document.createElement('tr');
        tbodyRow.innerHTML = `
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button class = 'row-button'>X</button></td>
        `
        this.tBody.append(tbodyRow);
   }
   this.elem.append(this.tBody);
   
   // функции удаления строки
   this.elem.onclick = this.removeRow;
  }

  // функции удаления строки
  removeRow = function(event) {
        if(event.target.classList == 'row-button') {
            event.target.closest('tr').remove();
        }
   };
}
