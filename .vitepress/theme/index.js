import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import Layout from './Layout.vue' // Import new layout file
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
  }
} 