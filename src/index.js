const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const {render, measureElement, Box, Text} = require('ink');
const App = importJsx('./components/ui');
const CommitList = importJsx('./components/CommitList');

function Main(props) {

	let flagOptions = {
		'name': 'n',
		'interactive': 'i',
		'login': '',
		'logout': '',
		'list': 'l',
		'version': 'v',
		'config': '',
	}

	// TODO: Map version, date to markdown file.
	// TODO: Map views and logic to command flags

	return (
		<Box>
			<App/>
			<CommitList/>
		</Box>
	);
}

module.exports = Main
