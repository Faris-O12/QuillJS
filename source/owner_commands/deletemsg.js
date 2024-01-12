module.exports = {
	name: 'deletemsg',
	description: 'Delete a message',
	syntax: 'q.deletemsg message_id',
	async execute(args) {
		let [client, message] = args

		if (message.content.split(' ').length !== 2) {
			await message.channel.send("# Error\nSyntax: deletemsg message_id")
			return
		}

		let message_id = message.content.split(' ')[1]
		message.channel.messages.fetch(message_id)
			.then(message_ => {
				message_.delete()
			})
			.catch(console.error)
	}
}