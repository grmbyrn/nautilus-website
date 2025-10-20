import { describe, it, expect } from 'vitest';
import { HttpRegex } from './regex';

describe('HttpRegex', () => {
	it('matches http URLs', () => {
		expect(HttpRegex.test('http://example.com')).toBe(true);
	});

	it('matches https URLs', () => {
		expect(HttpRegex.test('https://example.com')).toBe(true);
	});

	it('does not match URLs without protocol', () => {
		expect(HttpRegex.test('example.com')).toBe(false);
	});

	it('does not match other protocols', () => {
		expect(HttpRegex.test('ftp://example.com')).toBe(false);
	});

	it('does not match empty string', () => {
		expect(HttpRegex.test('')).toBe(false);
	});
});
