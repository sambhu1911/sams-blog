/// <reference types="jest" />

import { Post } from '../types';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.resolve(__dirname, '../../data/posts.json');

const readPostsFromFile = (): Post[] => {
  const data = fs.readFileSync(postsFilePath, 'utf-8');
  return JSON.parse(data);
};

const writePostsToFile = (posts: Post[]): void => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
};

export const fetchPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(readPostsFromFile()), 500);
  });
};

export const fetchPostById = async (id: number): Promise<Post | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(readPostsFromFile().find(post => post.id === id)), 500);
  });
};

export const createPost = async (post: Post): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = readPostsFromFile();
      posts.push(post);
      writePostsToFile(posts);
      resolve();
    }, 500);
  });
};

export const updatePost = async (updatedPost: Post): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let posts = readPostsFromFile();
      posts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
      writePostsToFile(posts);
      resolve();
    }, 500);
  });
};

export const deletePost = async (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let posts = readPostsFromFile();
      posts = posts.filter(post => post.id !== id);
      writePostsToFile(posts);
      resolve();
    }, 500);
  });
};

// Removed duplicate self-import to avoid merged declaration error

describe('API utility functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('fetchPostById returns post data on a successful fetch', async () => {
    const mockPost = { id: 1, title: 'Test Title', content: 'Test Content' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPost,
    });

    const post = await fetchPostById(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/posts/1');
    expect(post).toEqual(mockPost);
  });

  test('fetchPostById throws an error when response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchPostById(1)).rejects.toThrow('Network response was not ok');
  });

  test('fetchPosts returns posts data on a successful fetch', async () => {
    const mockPosts = [
      { id: 1, title: 'First Post', content: 'Content of first post' },
      { id: 2, title: 'Second Post', content: 'Content of second post' }
    ];
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    });

    const posts = await fetchPosts();
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/posts');
    expect(posts).toEqual(mockPosts);
  });
});

