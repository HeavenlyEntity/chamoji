const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const {render, measureElement, Box, Text} = require('ink');
const { useEffect } = require('react');
const App = importJsx('./components/ui');
const CommitList = importJsx('./components/CommitList');

function Main(props) {

	// Let each option depict view and other options needed to complete user interaction.
	let flagOptions = {
		'name': Boolean,
		'interactive': Boolean,
		'i': 'interactive',
		'login': Boolean,
		'logout': Boolean,
		'list': Boolean,
		'l': 'list',
		'version': Boolean,
		'v': 'version',
		'config': '',
		'create': Boolean,
		'c': 'create',
	}

	useEffect(() => {
		for (const option in props) {
			let optionChosen = flagOptions[option]

			console.log('Chosen options:', optionChosen)
		}
	}, [])

	console.log('Props:', props)

	// TODO: Map options needed to define the current user flow.
	// TODO: Map version, date to markdown file.
	// TODO: Map views and logic to command flags

	return (
		<Box>
			<App/>
		</Box>
	);
}

module.exports = Main
