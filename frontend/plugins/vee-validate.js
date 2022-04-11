// imports
import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {
  required,
  email,
  regex,
  max_value as maxValue,
  min_value as minValue,
  double,
} from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

// extends
extend('required', { ...required })
extend('email', { ...email })
extend('regex', { ...regex })
extend('max_value', { ...maxValue })
extend('min_value', { ...minValue })
extend('double', { ...double })

// password
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: en.messages.confirmed,
})

// components
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
