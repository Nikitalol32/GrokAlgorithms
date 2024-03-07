
### Установка зависимостей
```
npm install
```

### Тестирование
```
npm run test
```

## Связные списки
```javascript
const linkedList = new LinkedList;
linkedList.head //первый элемент списка
linkedList.tail //последний элемент списка
linkedList // {head: null, tail: null}

```

### Добавление в начало списка
```javascript
const linkedList = new LinkedList;
linkedList.prepend(10);
// linkedList.head.value = 10
```

### Добавление в конец списка
```javascript
const linkedList = new LinkedList;
linkedList.append(10);
// linkedList.tail.value = 10
```

### Поиск элемента
```javascript
const linkedList = new LinkedList;
linkedList.append(10);
// linkedList.find(10).value = 10
```

### Удаление всех элементов === value
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
linkedList.delete(1);
// linkedList.head.value = 2
// linkedList.tail.value = 3
```

**Если в linkedList не осталось элементов**
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(1).append(1);
linkedList.delete(1);
// linkedList = {head: null, tail: null}
```

### Удаление первого элемента
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
linkedList.deleteHead();
// linkedList.head.value = 2
// linkedList.tail.value = 3
```

### Удаление последнего элемента
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
linkedList.deleteTail();
// linkedList.head.value = 1
// linkedList.tail.value = 3
```

### Преобразование в массив
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
const array = linkedList.toArray();
// array = [1, 2, 3]
```

### Добавление нескольких элементов разом
```javascript
const linkedList = new LinkedList;
linkedList.fromArray([1, 2, 3]);
// linkedList.head.value = 1
// linkedList.head.next.value = 2
// linkedList.tail.value = 3
```

### Реверс
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
linked.reverse()
// linkedList.head.value = 3
// linkedList.head.next.value = 2
// linkedList.tail.value = 1
```

### Преобразование в cтроку
```javascript
const linkedList = new LinkedList;
linkedList.append(1).append(2).append(3);
const string = linked.toString()
// string = '1,2,3'
```

