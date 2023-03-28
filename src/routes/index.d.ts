interface LayoutSchema {
	loudestTopics: topic[];
}

interface HomeSchema {
	templateList: Panel[];
}

interface Expandable {
	type: 'panel';
}

interface Panel extends Expandable {
	header: string;
	selectable: SelectableKey;
	alignment: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
	cardList: email[];
}

type SelectableKey = 'email' | 'topic' | 'recipient' | 'spotlight';
interface Selectable {
	name: string;
	type: SelectableKey;
	index?: number;
}

interface UserState {
	topic: Writable<Selectable>;
	email: Writable<Selectable>;
	recipient: Writable<Selectable>;
	spotlight: Writable<Selectable>;
	[key: string];
}
