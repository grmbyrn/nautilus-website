import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Helper to dynamically import after mocks are set
async function importTheme() {
	return await import('./theme');
}

describe('getInitialTheme', () => {
	beforeEach(() => {
		vi.resetAllMocks();
		// @ts-expect-error: Mocking global.window for test environment, needed for theme logic
		global.window = {};
		global.window.matchMedia = vi.fn(() => ({
			matches: false,
			media: '',
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn()
		}));
		// @ts-expect-error: Mocking global.localStorage for test environment, needed for theme logic
		global.localStorage = {
			getItem: vi.fn(),
			setItem: vi.fn()
		};
		// @ts-expect-error: Mocking global.document for test environment, needed for theme logic
		global.document = {
			documentElement: {
				setAttribute: vi.fn()
			} as unknown as HTMLElement // Cast to HTMLElement to satisfy TS
		};
	});

	afterEach(() => {
		vi.resetModules();
	});

	it('returns "light" if not in browser', async () => {
		vi.mock('$app/environment', () => ({ browser: false }));
		const { getInitialTheme } = await importTheme();
		expect(getInitialTheme()).toBe('light');
	});

	it('returns stored theme if present in localStorage', async () => {
		vi.mock('$app/environment', () => ({ browser: true }));
		global.localStorage.getItem = vi.fn(() => 'dark');
		const { getInitialTheme } = await importTheme();
		expect(getInitialTheme()).toBe('dark');
	});

	it('returns "dark" if prefers-color-scheme is dark', async () => {
		vi.mock('$app/environment', () => ({ browser: true }));
		global.localStorage.getItem = vi.fn(() => null);
		global.window.matchMedia = vi.fn(() => ({
			matches: true,
			media: '',
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn()
		}));
		const { getInitialTheme } = await importTheme();
		expect(getInitialTheme()).toBe('dark');
	});

	it('returns "light" if prefers-color-scheme is not dark', async () => {
		vi.mock('$app/environment', () => ({ browser: true }));
		global.localStorage.getItem = vi.fn(() => null);
		global.window.matchMedia = vi.fn(() => ({
			matches: false,
			media: '',
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn()
		}));
		const { getInitialTheme } = await importTheme();
		expect(getInitialTheme()).toBe('light');
	});
});
