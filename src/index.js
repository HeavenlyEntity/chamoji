const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const {render, measureElement, Box, Text} = require('ink');
const App = importJsx('./components/ui');
const CommitList = importJsx('./components/CommitList');

function Main(props) {
	return (
		<Box>
			<App/>
			<CommitList/>
		</Box>
	);
}

module.exports = Main
