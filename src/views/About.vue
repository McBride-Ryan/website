<template>
    <Navbar/>
  <div>
    Welcome to the the odyssey
  </div>
  <p class="px-2 hover:underline uppercase text-sm">NFL</p>
    <ol class="absolute px-2 hover:cursor-pointer" :class="{ 'hidden z-50 ': nflHover }">
        <li class="py-1 hover:underline">
            <a href="/team-stats">Team Stats</a>
        </li>
        <li class="py-1 hover:underline">
            <RouterLink to="/api/v1/quarterbacks">Quarterbacks</RouterLink>
        </li>
        <li class="py-1 hover:underline">
            <a href="/running-backs">Running Backs</a>
        </li>
        <li class="py-1 hover:underline">
            <a href="/wide-receivers">Wide Receivers</a>
        </li>
        <li class="py-1 hover:underline">
            <a href="/tight-ends">Tight Ends</a>
        </li>
        <li class="py-1 hover:underline">
            <a href="/projections-nfl">Projections</a>
        </li>
    </ol>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {Navbar}
}
</script>
