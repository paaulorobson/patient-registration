<template>
  <div>
    <h1 class="text-lg font-bold text-[#1C242D] text-left uppercase mt-5">Adicionar paciente</h1>
    <form class="mt-10">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label
            for="nome-paciente"
            class="block text-sm font-medium leading-6 text-gray-900 text-left"
          >
            Nome completo
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="nome-paciente"
              id="nome-paciente"
              v-model="nome"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="col-span-full">
          <label
            for="nome-da-mae"
            class="block text-sm font-medium leading-6 text-gray-900 text-left"
          >
            Nome completo da mãe
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="nome-da-mae"
              id="nome-da-mae"
              v-model="nomeMae"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label
            for="data-nascimento"
            class="block text-sm font-medium leading-6 text-gray-900 text-left"
          >
            Data de nascimento
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="data-nascimento"
              id="data-nascimento"
              v-model="dataNascimento"
              v-mask="'##/##/####'"
              placeholder="--/--/---"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="cpf" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            CPF
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="cpf"
              id="cpf"
              v-model="cpf"
              v-mask="'###.###.###-##'"
              placeholder="___.___.___-__"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="cns" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            CNS
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="cns"
              id="cns"
              v-model="cns"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="cep" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            CEP
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="cep"
              id="cep"
              v-model="endereco.cep"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="logradouro"
            class="block text-sm font-medium leading-6 text-gray-900 text-left"
          >
            Logradouro
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="logradouro"
              id="logradouro"
              v-model="endereco.logradouro"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="bairro" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            Bairro
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="bairro"
              id="bairro"
              v-model="endereco.bairro"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="cidade" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            Cidade
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="cidade"
              id="cidade"
              v-model="endereco.cidade"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="estado" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            Estado
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="estado"
              id="estado"
              v-model="endereco.estado"
              class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-blue-500 px-3 py-2 text-right text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdicionarPacientes',

  data() {
    return {
      nome: '',
      nomeMae: '',
      dataNascimento: '',
      cpf: '',
      cns: '',
      endereco: {
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
    };
  },
};
</script>
