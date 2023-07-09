interface LayoutSchema {
	loudestTopics: topic[];
	template: Layout;
	authProviders: AuthSchema;
}

interface Layout {
	primary: Panel;
	secondary: Panel;
	[key: string];
}
