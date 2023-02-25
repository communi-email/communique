interface ComposeSchema {
	profilerKey: string;
	editorKey: string;
}

interface RawEmailForm {
	subject: string;
	body: string;
	topic_list: string;
	recipient_list: string;
	[key: string];
}

interface EmailFormInput extends RawEmailForm {
	topic_list: string[];
	recipient_list: string[];
}
