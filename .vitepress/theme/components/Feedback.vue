<script setup>
import { ref, reactive, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
// Paste your Google Web App URL here
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
// PRODUCT NAME for each product repo (e.g. 'FluentCRM', 'FluentForms')
const PRODUCT_NAME = 'FluentSMTP-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  vote: null,           // 'yes' | 'no' | null
  showComment: false,   // toggled by 💬 Feedback button
  comment: '',
  submitting: false,
  submitted: false,
})

// Reset on route change so each page has its own feedback state.
watch(() => route.path, () => {
  state.vote = null
  state.showComment = false
  state.comment = ''
  state.submitting = false
  state.submitted = false
})

const send = async (payload) => {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
    })
  } catch (e) {
    console.error('Feedback Error:', e)
  }
}

const vote = async (value) => {
  if (state.submitting) return
  state.vote = value
  state.submitting = true
  await send({
    product: PRODUCT_NAME,
    path: route.path,
    title: page.value.title,
    vote: value,
  })
  state.submitting = false
}

const toggleComment = () => {
  state.showComment = !state.showComment
}

const submitComment = async () => {
  if (state.submitting) return
  if (!state.comment.trim()) return
  state.submitting = true
  await send({
    product: PRODUCT_NAME,
    path: route.path,
    title: page.value.title,
    vote: state.vote,
    message: state.comment.trim(),
  })
  state.submitting = false
  state.submitted = true
  state.showComment = false
  state.comment = ''
}
</script>

<template>
  <div class="feedback-wrapper">
    <div class="feedback-header">
      <span class="title">Was this page helpful?</span>
    </div>

    <div class="actions-row">
      <button
        class="btn"
        :class="{ active: state.vote === 'yes' }"
        :disabled="state.submitting"
        @click="vote('yes')"
      >
        👍 Yes
      </button>
      <button
        class="btn"
        :class="{ active: state.vote === 'no' }"
        :disabled="state.submitting"
        @click="vote('no')"
      >
        👎 No
      </button>
      <button
        class="btn text-btn"
        :class="{ active: state.showComment }"
        @click="toggleComment"
      >
        💬 Feedback
      </button>
    </div>

    <div v-if="state.showComment" class="comment-area">
      <textarea
        v-model="state.comment"
        class="input-box"
        placeholder="Tell us how we can improve this page..."
      ></textarea>
      <button
        class="submit-btn"
        :disabled="state.submitting || !state.comment.trim()"
        @click="submitComment"
      >
        {{ state.submitting ? 'Sending…' : 'Submit' }}
      </button>
    </div>

    <div v-if="state.submitted" class="success-msg">
      Thanks for your feedback!
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feedback-header {
  margin-bottom: 1rem;
}

.title {
  font-weight: 600;
  font-size: 1.1rem;
}

.actions-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 6px 16px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-1px);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  transform: none;
}

.btn.active {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-alt);
}

.text-btn {
  color: var(--vp-c-text-2);
}

.comment-area {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
  width: 100%;
}

.input-box {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  font-size: 14px;
  font-family: inherit;
  color: var(--vp-c-text-1);
  resize: vertical;
}

.input-box:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}

.submit-btn {
  align-self: center;
  padding: 6px 20px;
  background-color: var(--vp-c-brand);
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
}

.submit-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.success-msg {
  margin-top: 15px;
  font-weight: 600;
  color: var(--vp-c-brand);
}
</style>
