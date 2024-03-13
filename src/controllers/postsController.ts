// SQL table posts schema
export interface Post {
  id: number
  title: string
}

// GET /posts => /posts/+page.svelte
export async function getPosts(): Promise<Post[]> {
  try {
    // const response = await fetch('http://127.0.0.1:3000/posts')
    const response = await fetch('https://back--go-fiber-api--f98q4y48vb47.code.run/posts')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data: Post[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
