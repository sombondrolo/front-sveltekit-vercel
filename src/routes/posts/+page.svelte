<script lang="ts">
  import { type Post, getPosts } from "../../controllers/postsController"
  import { onMount } from "svelte"

  let posts: Post[] = []

  onMount(async () => {
    posts = await getPosts()
  })
</script>

<section>
  <h1>Posts#index</h1>

  {#if posts.length > 0}
    <ul>
      {#each posts as post (post.id)}
        <li>{post.title}</li>
      {/each}
    </ul>
  {:else}
    <p>No posts available.</p>
  {/if}
</section>

<style>
h2 {
  margin-bottom: 20px;
}
ul li {
  list-style: none;
  margin: 0 0 10px 20px;
}
</style>