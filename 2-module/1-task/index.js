/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(obj) {
  let sumSal = 0;

  for(let key in obj) {
    if (isNaN(obj[key]) == false && isFinite(obj[key]) == true ) {
      sumSal += obj[key];
    }
  }

  return sumSal;
}

sumSalary(salaries);
