const React = require('react');
const PropTypes = require('prop-types');
const { Box, Text } = require('ink')
const SelectInput = require('ink-select-input').default


function GitSetUp({currentDirectory}) {

	const menuItems = [
		{
			label: 'Raw Commits (From Files)',
			name: 'raw'
		},
		{
			label: 'Remote Link',
			name: 'remote'
		}
	]

	function handleOptionSelection (item) {
		console.log('Toggled view:', item)
		if (item.name === 'raw') {
			// Use hooks here to pull in commits and project metadata

		} else if (item.name === 'remote') {
			// Run inquirer to get git creds and link account
			// CHALLENGE 🏁: Get via Oauth 2!
		}
	}

	if (currentDirectory ) {
		return (
			<>
			  <SelectInput items={menuItems} onSelect={handleOptionSelection}/>
			</>
		)
	}

	return (
		<>
			<Text>
				You do not have a repo here. Make sure a <Text color='red'>.git</Text> folder is present.
			</Text>
		</>
	);
}

GitSetUp.propTypes = {
	currentDirectory: PropTypes.boolean
};

module.exports = GitSetUp;
