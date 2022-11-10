const React = require('react');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');
const {render, measureElement, Box, Text, Newline, Spacer} = require('ink');
const { useEffect, useState } = require('react');
const { useCurrentDirectoryBase, useDirectoryExists } = require('./hooks/useFileExplorer');
const App = importJsx('./components/ui');
const GitSetUp = importJsx('./components/GitSetUp');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');
const SelectInput = require('ink-select-input')

function Main(props) {
	// Let each option depict view and other options needed to complete user interaction.
	let flagOptions = {
		'name': Boolean,
		'interactive': Boolean,
		'i': 'interactive',
		'login': Boolean,
		'logout': Boolean,
		'list': Boolean,
		'link': () => {

		},
		'l': 'list',
		'version': Boolean,
		'v': 'version',
		'config': '',
		'create': Boolean,
		'c': 'create',
	}


	const [gitDirectoryExists, setGitDirectoryExists] = useState(false)


	useEffect(() => {
		for (const option in props) {
			let optionChosen = flagOptions[option]

			console.log('Chosen options:', optionChosen)
		}

		setGitDirectoryExists(useDirectoryExists('.git'))

	}, [])

	console.log('Props:', props)

	// TODO: Map options needed to define the current user flow.
	// TODO: Map version, date to markdown file.
	// TODO: Map views and logic to command flags


	return (
		<>
			<Gradient name='retro'>
				<BigText font='tiny' text="Chamoji" align='center' backgroundColor='cyan' letterSpacing={5}/>
			</Gradient>
			<GitSetUp currentDirectory={gitDirectoryExists}/>
		</>
	);
}

module.exports = Main
