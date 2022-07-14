class DateTimeColor {
  constructor() {
    this.date = new Date();
    this.time_box = document.querySelector('.time');
    this.date_box = document.querySelector('.date');
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.schedule = 'am';
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.monthMap = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
  }

  getDateTime() {
    this.time_modifier();
    this.date_modifier();
    this.time_box.textContent = `${this.hours}:${this.minutes}:${this.seconds} ${this.schedule}`;
    this.date_box.textContent = `${this.day} ${this.month} ${this.year}`;
  }

  time_modifier() {
    if (this.hours >= 12) {
      this.schedule = 'pm';
      if (this.hours > 12) {
        this.hours -= 12;
      }
    } else if (this.hours == 0) {
      this.hours = 12;
    }

    if (this.minutes < 10) {
      this.minutes = `0${this.minutes}`;
    }
    if (this.seconds < 10) {
      this.seconds = `0${this.seconds}`;
    }
  }

  date_modifier() {
    this.month = this.monthMap[this.month];
  }

  colorPicker(color) {
    this.time_box.style.color = color;
    this.date_box.style.color = color;
  }
}

export default DateTimeColor;
