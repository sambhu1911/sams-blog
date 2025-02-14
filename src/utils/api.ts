/// <reference types="jest" />

interface Post {
  id: number;
  title: string;
  content: string;
  // add other properties as needed
}

export const fetchPosts = async () => {
    const response = await fetch('https://api.example.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await fetch(`https://api.example.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Post = await response.json();
  return data;
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

