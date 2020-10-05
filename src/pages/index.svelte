<Hero />
<div class="max-w-5xl m-auto mt-8 px-4 lg:px-0">
  <About />
</div>
<Statistics />

<script>
  import { metatags } from "@sveltech/routify"
  import Hero from "./_components/Hero.svelte"
  import About from "./_components/About.svelte"
  import Statistics from "./_components/Statistics.svelte"
  metatags.title = "Beranda | SMKN 3 Jember"
  metatags.description = "..."
</script>
