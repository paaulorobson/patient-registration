<template>
  <div>
    <h1 class="text-lg font-bold text-[#1C242D] text-left uppercase mt-5">Adicionar paciente</h1>
    <form class="mt-5 pr-10 pb-10" @submit.prevent="submitForm">
      <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
        <div class="col-span-full">
          <label for="nome" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            Nome completo
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="nome"
              id="nome"
              v-model="nome"
              @change="$v.nome.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.nome.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.nome.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.nome.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
          </div>
        </div>
        <div class="col-span-full">
          <label for="nomeMae" class="block text-sm font-medium leading-6 text-gray-900 text-left">
            Nome completo da mãe
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="nomeMae"
              id="nomeMae"
              v-model="nomeMae"
              @change="$v.nomeMae.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.nomeMae.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.nomeMae.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.nomeMae.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label
            for="dataNascimento"
            class="block text-sm font-medium leading-6 text-gray-900 text-left"
          >
            Data de nascimento
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="dataNascimento"
              id="dataNascimento"
              v-model="dataNascimento"
              @change="$v.dataNascimento.$touch()"
              v-mask="'##/##/####'"
              placeholder="--/--/---"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.dataNascimento.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.dataNascimento.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.dataNascimento.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
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
              @change="$v.cpf.$touch()"
              v-mask="'###.###.###-##'"
              placeholder="___.___.___-__"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.cpf.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.cpf.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.cpf.$error" class="text-sm text-red-500"> Este campo é requerido</span>
            </div>
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
              @change="$v.cns.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.cns.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.cns.$error,
              }"
            />
            <div class="text-left">
              <span v-if="!$v.cns.required && $v.cns.$dirty" class="text-sm text-red-500">
                O CNS é requerido.
              </span>
              <span v-if="$v.cns.numeric === false && $v.cns.$dirty" class="text-sm text-red-500">
                O CNS deve aceitar apenas números.
              </span>
              <span
                v-if="
                  ((!$v.cns.minLength && $v.cns.$dirty) || (!$v.cns.maxLength && $v.cns.$dirty)) &&
                  $v.cns.numeric
                "
                class="text-sm text-red-500"
              >
                O CNS deve ter 15 caracteres.
              </span>
            </div>
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
              v-model="cep"
              @change="$v.cep.$touch()"
              @blur="buscarEndereco"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.cep.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.cep.$error,
              }"
            />
            <div class="text-left">
              <span v-if="!$v.cep.required && $v.cep.$dirty" class="text-sm text-red-500">
                Este campo é requerido</span
              >
              <span v-if="!$v.cep.numeric && $v.cep.$dirty" class="text-sm text-red-500">
                O CEP deve conter apenas números</span
              >
              <span
                v-if="(!$v.cep.minLength || !$v.cep.maxLength) && $v.cep.numeric"
                class="text-sm text-red-500"
              >
                O CEP deve ter 8 caracteres</span
              >
            </div>
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
              v-model="logradouro"
              @change="$v.logradouro.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.logradouro.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.logradouro.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.logradouro.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
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
              v-model="bairro"
              @change="$v.bairro.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.bairro.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.bairro.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.bairro.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
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
              v-model="cidade"
              @change="$v.cidade.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.cidade.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.cidade.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.cidade.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
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
              v-model="estado"
              @change="$v.estado.$touch()"
              :class="{
                'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6':
                  !$v.estado.$error,
                'border-red-500 border-2 block w-full rounded-md py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6':
                  $v.estado.$error,
              }"
            />
            <div class="text-left">
              <span v-if="$v.estado.$error" class="text-sm text-red-500">
                Este campo é requerido</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          :class="{
            'rounded-md bg-blue-500 px-3 w-40 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2': true,
            'rounded-md bg-blue-500 opacity-50 w-40 text-center  pointer-events-none px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2':
              formIncomplete,
          }"
        >
          {{ labelButton }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../service/api';
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'AdicionarPacientes',

  data() {
    return {
      nome: '',
      nomeMae: '',
      dataNascimento: '',
      cpf: '',
      cns: '',
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: '',
    };
  },

  validations: {
    nome: { required, minLength: minLength(3) },
    nomeMae: { required, minLength: minLength(3) },
    dataNascimento: { required },
    cpf: { required },
    cns: {
      required,
      numeric,
      minLength: minLength(15),
      maxLength: maxLength(15),
    },
    cep: {
      required,
      numeric,
      minLength: minLength(8),
      maxLength: maxLength(8),
    },
    logradouro: { required },
    bairro: { required },
    cidade: { required },
    estado: { required },
  },

  mounted() {
    this.getPaciente();
  },

  computed: {
    formIncomplete() {
      return this.$v.$invalid;
    },

    labelButton() {
      if (this.$route.params.id) {
        return 'Editar';
      } else {
        return 'Salvar';
      }
    },
  },

  methods: {
    async buscarEndereco() {
      if (this.cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
          this.logradouro = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        } catch (error) {
          console.warn(error);
        }
      }
    },

    async submitForm() {
      if (!this.$v.$error) {
        const data = {
          nome: this.nome,
          nomeMae: this.nomeMae,
          dataNascimento: this.dataNascimento,
          cpf: this.cpf,
          cns: this.cns,
          endereco: {
            cep: this.cep,
            logradouro: this.logradouro,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
          },
        };
        if (this.$route.params.id) {
          const id = this.$route.params.id;
          try {
            await api.put(`/pacientes/${id}`, data);
            this.$router.push({ name: 'pacientes' });
          } catch (error) {
            console.warn(error);
          }
        } else {
          try {
            await api.post('/pacientes', data);
            document.querySelector('form').reset();
          } catch (error) {
            console.warn(error);
          }
        }
      } else {
        this.$v.$touch();
      }
    },

    async getPaciente() {
      if (this.$route.params.id) {
        const id = this.$route.params.id;
        try {
          const response = await api.get(`/pacientes/${id}`);
          this.nome = response.data.nome;
          this.nomeMae = response.data.nomeMae;
          this.dataNascimento = response.data.dataNascimento;
          this.cpf = response.data.cpf;
          this.cns = response.data.cns;
          this.cep = response.data.endereco.cep;
          this.logradouro = response.data.endereco.logradouro;
          this.bairro = response.data.endereco.bairro;
          this.cidade = response.data.endereco.cidade;
          this.estado = response.data.endereco.estado;
        } catch (error) {
          console.warn(error);
        }
      }
    },
  },
};
</script>
