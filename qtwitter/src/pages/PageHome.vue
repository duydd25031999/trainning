<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-sm">
      <div class="col">
        <q-input
          bottom-slots
          class="new-qweet"
          v-model="newQweetContent"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disable="!newQweetContent"
          class="q-mb-lg"
          unelevated
          rounded
          color="primary"
          label="Qweet"
          no-caps
        />
      </div>
    </div>

    <q-separator class="divider" size="10px" color="grey-2" />

    <q-list separator>
      <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Hoàng Anh</strong>
            <span class="text-grey-7"> @hoang__anh </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            {{ qweet.content }}
          </q-item-label>
          <div class="qweet-icon row justify-between q-mt-sm">
            <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
            <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-trash" size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ qweet.date }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique molestias dolore, ab libero eius? Voluptatum quaerat architecto ex blanditiis, perspiciatis dolor quisquam labore fuga repellendus minima! Maxime, provident est.",
          date: 1628240242011,
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique molestias dolore, ab libero eius? Voluptatum quaerat architecto ex blanditiis, perspiciatis dolor quisquam labore fuga repellendus minima! Maxime, provident est.",
          date: 1628240270477,
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique molestias dolore, ab libero eius? Voluptatum quaerat architecto ex blanditiis, perspiciatis dolor quisquam labore fuga repellendus minima! Maxime, provident est.",
          date: 1628240281712,
        },
      ],
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  }
}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4em !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet-content
  white-space: pre-line

.qweet-icon
  margin-left: -5px
</style>
