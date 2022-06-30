<template>
  <div
    class="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center"
  >
    <div class="bg-gray-800 rounded-md p-6 h-3/5">
      <form
        class="flex gap-2 border-b border-gray-500 pb-4"
        @submit.prevent="onSubmit"
      >
        <input
          v-model="text"
          class="rounded-lg p-4 mr-0 text-gray-800 bg-white"
          placeholder="Cadastrar"
        />
        <button
          type="submit"
          class="px-8 rounded-md bg-purple-500 hover:bg-purple-700 text-gray-100 font-bold p-4 uppercase transition-colors"
        >
          Incluir
        </button>
      </form>

      <ul class="text-white py-4">
        <h4 class="mb-2 text-xl">Itens cadastrados</h4>
        <li
          v-for="(item, index) in list"
          :key="index"
          class="text-gray-300 py-1"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      list: [],
      text: '',
    }
  },

  methods: {
    onSubmit() {
      this.list.push(this.text)
      this.text = ''
    },
  },
}
</script>
