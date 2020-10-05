<!-- prettier-ignore -->
<nav
  class={
    $isActive('/index')
      ? `fixed z-10 t-0 px-4 lg:px-0 inset-x-0 h-16 nunito ${offsetY >= 32 ? 'bg-white text-blue-900 border-b-2 border-gray-300' : 'bg-white text-blue-900 lg:bg-transparent lg:text-white'}`
      : 'fixed z-10 t-0 px-4 lg:px-0 inset-x-0 h-16 nunito bg-white text-blue-900 border-b-2 border-gray-300'
  }
  style="transition: background-color ease-out .25s">
  <div class="max-w-5xl flex items-center m-auto h-full">
    <h1 class="font-extrabold text-xl lg:text-2xl flex-1">
      <a href={'/'} title="Beranda">SMKN 3 Jember</a>
    </h1>
    <div
      class="hidden lg:grid grid-cols-5 justify-center items-center gap-4 tracking-wider">
      <div
        class="flex items-center justify-center cursor-pointer hover:text-orange">
        <a
          title="Beranda"
          href={$url('/')}
          class={$isActive('/index') ? 'active font-semibold' : ''}>
          Beranda
        </a>
      </div>
      <div
        class="flex items-center justify-center cursor-pointer hover:text-orange">
        <a
          title="Berita"
          href={$url('/berita')}
          class={$isActive('/berita') ? 'active font-semibold' : ''}>
          Berita
        </a>
      </div>
      <div
        class="flex items-center justify-center cursor-pointer hover:text-orange">
        <a
          title="Jurusan"
          href={$url('/jurusan')}
          class={$isActive('/profil/jurusan') ? 'active font-semibold' : ''}>
          Jurusan
        </a>
      </div>
      <div
        class="group relative flex items-center justify-center cursor-pointer">
        <span class="mr-2">Profil</span>
        <Arrow />
        <div
          class="group-hover:block hidden absolute w-64 pt-6"
          style="right: -0.5rem; top: 50%">
          <div
            class="grid grid-rows-3 bg-white text-blue-900 p-4 rounded-md border-2 border-gray-300">
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/profil/sekolah')}>
              Sekolah
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/profil/staf-dan-guru')}>
              Staf dan Guru
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/profil/komite-sekolah')}>
              Komite Sekolah
            </a>
          </div>
        </div>
      </div>
      <div
        class="group relative flex items-center justify-center cursor-pointer">
        <span class="mr-2">LSP</span>
        <Arrow />
        <div
          class="group-hover:block hidden absolute w-64 pt-6"
          style="right: -0.5rem; top: 50%">
          <div
            class="grid grid-rows-3 bg-white text-blue-900 p-4 rounded-md border-2 border-gray-300">
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/lsp/ketua-lsp')}>
              Ketua LSP
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/lsp/sejarah-singkat')}>
              Sejarah Singkat
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/lsp/skema-lsp')}>
              Skema LSP
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/lsp/visi-dan-misi')}>
              Visi dan Misi
            </a>
            <a
              class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
              href={$url('/lsp/struktur-organisasi')}>
              Struktur Organisasi
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="block lg:hidden hamburger w-8 h-8 relative flex flex-col justify-center">
      <input
        type="checkbox"
        class="absolute w-8 h-8 opacity-0"
        onClick={() => (isVisible = !isVisible)} />
      <span class="block w-full bg-blue-900 rounded" />
      <span class="block w-full bg-blue-900 rounded my-2" />
      <span class="block w-full bg-blue-900 rounded" />
    </div>
  </div>
</nav>

{#if isVisible}
  <div
    class="fixed mt-16 grid-rows-5 justify-center items-center tracking-wider bg-white z-50 w-full text-xl shadow-lg">
    <div class="flex items-center justify-center cursor-pointer my-4">
      <a href={$url('/')} title="Beranda">Beranda</a>
    </div>
    <div class="flex items-center justify-center cursor-pointer my-4">
      <a href={$url('/berita')} title="Berita">Berita</a>
    </div>
    <div class="flex items-center justify-center cursor-pointer my-4">
      <a href={$url('/jurusan')} title="Jurusan">Jurusan</a>
    </div>
    <div
      class="group relative flex flex-col items-center justify-center cursor-pointer my-4">
      <div class="flex items-center">
        <span class="mr-2">Profil</span>
        <Arrow />
      </div>
      <div class="group-hover:block hidden w-64 text-center">
        <div class="grid grid-rows-3 bg-white text-blue-900 p-4">
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/profil/sekolah')}>
            Sekolah
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/profil/staf-dan-guru')}>
            Staf dan Guru
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/profil/komite-sekolah')}>
            Komite Sekolah
          </a>
        </div>
      </div>
    </div>
    <div
      class="group relative flex flex-col items-center justify-center cursor-pointer my-4">
      <div class="flex items-center">
        <span class="mr-2">LSP</span>
        <Arrow />
      </div>
      <div class="group-hover:block hidden w-64 text-center">
        <div class="grid grid-rows-3 bg-white text-blue-900 p-4">
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/lsp/ketua-lsp')}>
            Ketua LSP
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/lsp/sejarah-singkat')}>
            Sejarah Singkat
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/lsp/skema-lsp')}>
            Skema LSP
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/lsp/visi-dan-misi')}>
            Visi dan Misi
          </a>
          <a
            class="nunito block hover:bg-lightOrange hover:text-darkOrange rounded-md p-2"
            href={$url('/lsp/struktur-organisasi')}>
            Struktur Organisasi
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<script>
  import { url, isActive } from "@sveltech/routify"
  import { onMount } from "svelte"
  import Arrow from "../../icons/arrow.svg"

  let isVisible = false
  let offsetY = 0

  onMount(() => {
    window.addEventListener("scroll", () => (offsetY = window.pageYOffset))
  })
</script>
