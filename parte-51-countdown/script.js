class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate
  }

  get _actualDate() {
    return new Date()
  }

  get _futureDate() {
    return new Date(this.futureDate)
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime()
  }

  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
  }

  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000))
  }

  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000))
  }

  get seconds() {
    return Math.floor(this._timeStampDiff / 1000)
  }

  get total() {
    const days = this.days,
          hours = this.hours % 24,

          minutes = this.minutes % 60,
          seconds = this.seconds % 60

    return {
      days,
      hours,

      minutes,
      seconds
    }
  }
}

const natal = new Countdown('24 December 2022 23:59:59 GMT-0300')

setInterval(() => { 
  document.body.innerHTML = `${natal.total.days}:${natal.total.hours}:${natal.total.minutes}:${natal.total.seconds}`
}, 1000)