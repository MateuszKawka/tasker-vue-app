<template>
<transition name='slide'>
   <div class="container">
        <p class='date'>{{dayOfMonth}} {{month}}</p>
        <p class='date bold'>{{dayOfWeek}}</p>
        <p class='date'>{{`${hour}:${minutes}`}}</p>
      </div>
</transition>
</template>

<script>
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default {
  name: 'Date',
  data() {
    return {
      today: Date,
      dayOfMonth: String,
      dayOfWeek: String,
      month: String,
      hour: String,
      minutes: String
    };
  },
  methods: {
    getDate() {
      this.today = new Date();
      let tod = this.today;
      let dayOfMonth = tod.getDate();
      let dayOfWeek = tod.getDay() - 1;
      let month = tod.getMonth();
      this.dayOfMonth = dayOfMonth;
      this.dayOfWeek = days[dayOfWeek];
      this.month = months[month];

      let hour = tod.getHours();
      let minutes = tod.getMinutes();

      this.hour = hour;
      this.minutes = minutes;
    }
  },
  mounted() {
    this.getDate();
    window.setInterval(() => {
      this.getDate();
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/_variables.scss';

.date {
  display: flex;
  flex-flow: column wrap;
  font-size: 2rem;
  font-weight: 100;
  color: $details-ui-color;
  text-align: right;
}

.bold {
  font-weight: 400;
  font-size: 1.7rem;
  color: $contrast-color;
}
</style>
