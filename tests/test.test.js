import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../src/views/HomeView.vue'

test('renders properly', () => {
  const wrapper = mount(HomeView)
  expect(wrapper.find('[id="hero-text-top"]').text()).toBe('Starter')
  expect(wrapper.find('[id="hero-text-bottom"]').text()).toBe('Template')
})
