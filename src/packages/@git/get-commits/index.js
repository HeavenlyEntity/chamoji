const React = require('react');
const gitRawCommits = require('git-raw-commits')

const getCommitList = (from, to) => new Promise((resolve, reject) => {
	 gitRawCommits()
		.pipe((dest, options) => {
			console.debug('Data:', dest)
		})
})






module.exports = {
	getCommitList
}
