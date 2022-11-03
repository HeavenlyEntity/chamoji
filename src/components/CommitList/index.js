const React = require('react');
const { useState, useEffect } = require('react');
const {render, measureElement, Box, Text} = require('ink');
const { getCommitList } = require('../../packages/@git/get-commits');


function CommitList(props) {
	const [commitList, setCommitList] = useState([])

	useEffect(() => {
		let active = true
		async function getListOfRawCommits() {
			await getCommitList()
		}

		if (active) {
			getListOfRawCommits()
		}

		return () => {
			active = false
		}

	}, [])

	return (
		<Box>
			<Text>
				{commitList}
			</Text>
		</Box>
	);
}

module.exports = CommitList;
