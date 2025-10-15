import { describe, it, expect, beforeEach } from 'vitest';
import { createPostsIndex, searchPostsIndex } from './search';
import type { BlogPost } from './types'; // Use the correct relative path if needed

const mockPosts: BlogPost[] = [
	{
		slug: 'first-post',
		title: 'Hello World',
		excerpt: 'This is the first blog post.',
		tags: ['intro', 'welcome'],
		keywords: [],
		hidden: false,
		date: '2025-10-07',
		updated: '2025-10-07',
		html: undefined,
		readingTime: '1 min',
		relatedPosts: [],
		coverImage: undefined,
		contributorSlug: '',
		contributor: '',
		path: '/blog/first-post'
	},
	{
		slug: 'second-post',
		title: 'SvelteKit Testing',
		excerpt: 'Testing SvelteKit apps is fun.',
		tags: ['sveltekit', 'testing'],
		keywords: [],
		hidden: false,
		date: '2025-10-07',
		updated: '2025-10-07',
		html: undefined,
		readingTime: '1 min',
		relatedPosts: [],
		coverImage: undefined,
		contributorSlug: '',
		contributor: '',
		path: '/blog/second-post'
	}
];

describe('search utils', () => {
	beforeEach(() => {
		createPostsIndex(mockPosts);
	});

	it('returns matching post by title', () => {
		const results = searchPostsIndex('Hello');
		expect(results.length).toBe(1);
		expect(results[0].slug).toBe('first-post');
		expect(results[0].title).toContain('<mark>Hello</mark>');
	});

	it('returns matching post by tag', () => {
		const results = searchPostsIndex('testing');
		expect(results.length).toBe(1);
		expect(results[0].slug).toBe('second-post');
		expect(results[0].tags.some((tag) => tag.includes('<mark>testing</mark>'))).toBe(true);
	});

	it('returns empty array for no match', () => {
		const results = searchPostsIndex('nonexistent');
		expect(results.length).toBe(0);
	});

	it('returns empty array for empty search term', () => {
		const results = searchPostsIndex('');
		expect(results.length).toBe(0);
	});

	it('highlights matches in excerpt', () => {
		const results = searchPostsIndex('first');
		expect(results[0].content[0]).toContain('<mark>first</mark>');
	});
});
