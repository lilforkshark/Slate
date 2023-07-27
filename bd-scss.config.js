/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Slate',
		author: 'Gibbu & Tropical',
		description: `An optimized, consistent, and functional theme for Discord based on GitHub's design language.`,
		version: '1.2',
		source: 'https://github.com/lilforkshark/Slate/',
		invite: 'TeRQEPb'
	},
	base: {
		output: 'dist/dist'
	},
	baseImport: 'https://discordstyles.github.io/Slate/dist/Slate.css',
	addons: [
		['./src/addons/_toolbar-actions.scss', 'dist/ToolbarActions.css'],
		['./src/addons/_serverlist.scss', 'dist/Serverlist.css']
	]
};
