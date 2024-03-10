<script>
	import './global.css';
  import Navbar from '../partials/Navbar.svelte'
  import Footer from '../partials/Footer.svelte'
</script>

<div class="layout">
	<Navbar />

	<main class="content">
		<slot />
	</main>

	<Footer />
</div>

<style>
/* from demo +layout.svelte */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
