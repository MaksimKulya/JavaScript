// *Сравнить null и 0. Попробуйте объяснить результат.

document.write(null > 0)   // false  - оператор > превращает null  в 0, отчего и 0>0 false
document.write(null < 0)   // false  - также оператор < превращает null  в 0, отчего и 0<0 false
document.write(null == 0)  // false  - тут оператор == не приводит типы, и тогда тут тоже false
document.write(null >= 0)  // true  - тут >= работает как > или <, то есть преобразует null в 0, и тогда за счет нестрогого неравентсва 0<=0 верно