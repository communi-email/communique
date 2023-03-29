import objectMapper from '$lib/database';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ setHeaders }) {
	// TODO: compound queries, lazy load
	const loudestTopics = await objectMapper.topic.findMany({ take: 10 });

	setHeaders({
		'cache-control': 'public, max-age=3600'
	});
	const loudestTopicEmails = objectMapper.email.findMany({
		where: {
			topic_list: {
				has: loudestTopics[0].name
			}
		},
		take: 10
	});
	// const biggestRecipients = await objectMapper.recipient.findMany({
	// 	orderBy: [
	// 		{
	// 			email_read_count: 'desc'
	// 		}
	// 	],
	// 	take: 3
	// });
	// const biggestRecipientEmails = objectMapper.email.findMany({
	// 	where: {
	// 		recipient_list: {
	// 			has: biggestRecipients[0].address
	// 		}
	// 	},
	// 	take: 10
	// });
	const spotlightEmails = objectMapper.email.findMany({
		take: 10
	});
	return {
		loudestTopics,
		template: [
			{
				type: 'panel',
				selectable: 'topic',
				header: 'Loudest voices in',
				alignment: 'right',
				cardList: await loudestTopicEmails
			},
			{
				type: 'panel',
				selectable: 'spotlight',
				header: 'Spotlight on',
				alignment: 'left',
				cardList: await spotlightEmails
			}
		]
	};
}
