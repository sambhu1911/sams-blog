# My Blog Website

A full-stack blog application built with the MERN stack.

## Project Structure

```
my-blog-website
├── src
│   ├── components
│   │   └── Header.tsx
│   │   └── Footer.tsx
│   │   └── Post.tsx
│   ├── pages
│   │   └── Home.tsx
│   │   └── About.tsx
│   │   └── Contact.tsx
│   │   └── PostDetail.tsx
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── api.ts
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application

```bash
# Run backend
npm start

# Run frontend
cd client
npm start
```

## Usage

- Visit the home page to see a list of blog posts.
- Navigate to the About page to learn more about the blog and its author.
- Use the Contact page to reach out with any questions or feedback.
- Click on a blog post to view its full content.

## License

This project is licensed under the MIT License.