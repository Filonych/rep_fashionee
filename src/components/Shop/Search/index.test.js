import { useDebounce } from '../../../hooks/useDebounce';

// Задание 3. Покажите пример, как с помощью jest тестировать блоки с setTimeout

jest.useFakeTimers();

test('Переданная функция вызывается через 500мс', () => {
  const doSomething = jest.fn();
  const debouncedInputChange = useDebounce(doSomething, 500);	

	debouncedInputChange()

 jest.advanceTimersByTime(500)

  expect(doSomething).toHaveBeenCalled();
});

