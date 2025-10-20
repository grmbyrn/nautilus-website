import { describe, it, expect } from 'vitest';
import { formatDate, formatTime } from './date';

describe('formatDate', () => {
	it('formats a valid date string to UTC dd/mm/yyyy', () => {
		expect(formatDate('2025-10-06T12:34:56Z')).toBe('06/10/2025');
	});

	it('handles invalid date input gracefully', () => {
		expect(() => formatDate('invalid-date')).toThrow();
	});
});

describe('formatTime', () => {
	it('formats a valid time string to UTC HH:MM:ss', () => {
		expect(formatTime('2025-10-06T12:34:56Z')).toBe('12:34:56');
	});

	it('handles invalid time input gracefully', () => {
		expect(() => formatTime('invalid-time')).toThrow();
	});
});
