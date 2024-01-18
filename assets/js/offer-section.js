class JobOffersAnimation {
	constructor() {
		this.jobOffersRight = document.querySelector('.job-offers__right--event')
		this.line = document.querySelector('.job-offers__line')
		this.arrowIcon = document.querySelector('.job-offers__icon')
		this.offerLink = document.querySelector('.job-offers__link')

		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)

		this.jobOffersRight.addEventListener('mouseenter', this.handleMouseEnter)
		this.jobOffersRight.addEventListener('mouseleave', this.handleMouseLeave)
	}

	handleMouseEnter() {
		this.line.style.backgroundColor = '#944385'
		this.line.style.height = '40px'
		this.line.style.top = '18px'

		this.arrowIcon.style.filter = 'none'
		this.arrowIcon.style.top = '48px'

		this.offerLink.style.color = 'purple'
	}

	handleMouseLeave() {
		this.line.style.backgroundColor = ''
		this.line.style.height = ''
		this.line.style.top = ''

		this.arrowIcon.style.filter = ''
		this.arrowIcon.style.top = ''

		this.offerLink.style.color = ''
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const jobOffersAnimation = new JobOffersAnimation()
})



