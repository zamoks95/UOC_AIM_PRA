<template>
  <main class="page-home">
    <div class="container">
      <img class="logo" src="@/assets/icon.svg" alt="logo" />
      <h1 class="main-title">¿En busca de música?</h1>
      <p class="lorem-textum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
        arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus
        consectetur ipsum in imperdiet ultrices.
      </p>
      <play-lists :playlists="playlists" />
    </div>
  </main>
</template>

<script>
import artistsjson from "@/json/artists.json";
import PlayLists from "@/components/PlayLists";
import { getPlaylists } from "../api";

export default {
  name: "Home",
  components: { PlayLists },
  data() {
    const loadPlaylists = () => {
      let arrayPlaylists = [];

      const default_playlists_ids = [
        "752286631",
        "3039310962",
        "1431800665",
        "1699332611",
        "1159266401",
        "7145655804",
        "2655390504",
        "8424739742",
        "1045800791",
        "8410579942",
      ];
      default_playlists_ids.map((x) => {
        (async () => {
          arrayPlaylists.push(await getPlaylists(x));
        })();
      });

      return arrayPlaylists;
    };

    return {
      playlists: loadPlaylists(),
      artists: artistsjson.data,
    };
  },
};
</script>

<style lang="scss">
.page-home {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  .logo {
    width: 200px;
    margin-top: 35px;
    margin-bottom: 35px;
  }
}
</style>
