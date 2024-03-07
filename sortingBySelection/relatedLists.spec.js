import {LinkedList} from './relatedLists.js'

describe('Связанный список', () => {

	test('Добавление в начало списка', () => {
		const linkedList = new LinkedList;
		linkedList.append(1);

		const res = linkedList.head.value;

		expect(res).toEqual(1);
	})

	test('Добавление в конец списка', () => {
		const linkedList = new LinkedList;
		linkedList.prepend(10);

		const res = linkedList.tail.value;

		expect(res).toEqual(10);
	})

	test('Поиск элемента', () => {
		const linkedList = new LinkedList;

		linkedList.append(1).append(2).append('asd');

		const res = linkedList.find('asd').value

		expect(res).toEqual('asd');
	})

	test('Удаление всех элементов === value', () => {
		const linkedList = new LinkedList;

		linkedList.append(1).append(2).delete(3);

		const res = linkedList.delete(1).value;

		expect(res).toEqual(1);
	})
	
	test('Удаление первого элемента', () => {
		const linkedList = new LinkedList;
		
		linkedList.append(1).append(2).append(3).deleteHead();
		
		const res = linkedList.head.value;
		
		expect(res).toEqual(2);
	})

	test('Удаление последнего элемента', () => {
		const linkedList = new LinkedList;
		
		linkedList.append(1).append(2).append(3).deleteTail();
		
		const res = linkedList.tail.value;
		
		expect(res).toEqual(2);
	})
	
	test('Преобразование в массив', () => {
		const linkedList = new LinkedList;
		
		linkedList.append(1).append(2).append(3);
		
		const res = linkedList.toArray();
		
		expect(res).toEqual([1, 2, 3]);
	})

	test('Добавление нескольких элементов разом', () => {
		const linkedList = new LinkedList;
		
		linkedList.fromArray([1, 2, 3]);
		
		const res = linkedList.toArray();
		
		expect(res).toEqual([1, 2, 3])
	})
	
	test('Reverse ', () => {
		const linkedList = new LinkedList;
		
		linkedList.append(1).append(2).append(3);
		
		const res = linkedList.reverse().toArray();
		
		expect(res).toEqual([3, 2, 1]);
	})
	
	test('Преобразование в cтроку', () => {
		const linkedList = new LinkedList;
		
		linkedList.append(1).append(2).append(3);
		
		const res = linkedList.toString();
		
		expect(res).toEqual('1,2,3');
	})

})