<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventServices from '@/services/EventServices.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventServices.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('Error:' + error.response)
      })
  }
}
</script>
