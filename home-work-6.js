function MobilePhone (name) {
	this.name = name
	this.color = 'Красный'
	this.weight = '100gram'
	this.subscriber = ''
	this.message = ''
	this.sendMessage = function (message) {
		this.message = message
	}
	this.callAperson = function (number) {
		switch (number) {
			case 1:
				this.subscriber = 'Андрей'
			break
			case 2:
				this.subscriber = 'Сергей'
			break
			case 3:
				this.subscriber = 'Анна'
			break
			case 4:
				this.subscriber = 'Алла'
			break
			case 5:
				this.subscriber = 'Инокентий'
			break
		}
	}
}
const mobilePhone = new MobilePhone('Nokia')

mobilePhone.callAperson(3)
mobilePhone.sendMessage('Привет, Олег. Пора на работу.')
console.log(mobilePhone)