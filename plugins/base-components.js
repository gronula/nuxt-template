import Vue from 'vue'
import BasePicture from '@/components/base/BasePicture'
import BaseInput from '@/components/base/BaseInput'
import BaseCheckbox from '@/components/base/BaseCheckbox'

require
  .context(`@/assets/sprite/`, true, /i-.*\.svg$/i)
  .keys()
  .forEach(it => it)

Vue.component('BasePicture', BasePicture)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseCheckbox', BaseCheckbox)
