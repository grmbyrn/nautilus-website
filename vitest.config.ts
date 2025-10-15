import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: [
			'tests/**/*', // your Playwright E2E tests
			'node_modules/**/*', // all files in node_modules
			'**/node_modules/**/*' // all nested node_modules (just in case)
		]
	}
});
