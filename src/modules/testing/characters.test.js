import { randomChar } from '../characters';

test('random character is generated', () => {
    expect(randomChar()).not.toBe('Wrong Character');
});