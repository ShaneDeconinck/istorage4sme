
<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
      <thead>
        <tr
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <th scope="col" class="px-6 py-3" v-for="head in headers" :key="head">
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b" v-for="row in rows" :key="row._key">
          <td class="px-6 py-4" v-for="cell in row.cells" :key="cell">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: {
    rows: {
      type: Object,
      required: true,
    },
  },
};
</script>