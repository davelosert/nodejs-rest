// Just a fake in-mem folderStructure for testing purposes
var folderStructure = {
	'media': {
		'documents': 'Hello World'
	}
}



// *********** RETRIEVE FOLDERS
exports.getRootFolder = function (req, res) {
	res.json(folderStructure);
}
exports.getFolder = function (req, res) {
	res.json(folderStructure[req.params.folder]);
}
exports.getSubFolder = function (req, res) {
	res.json(folderStructure[req.params.folder][req.params.subFolder]);
}


// *********** CREATE FOLDERS
exports.createFolder = function (req, res) {
	folderStructure[req.params.folder] = {};
	res.json(folderStructure);
}

exports.createSubFolder = function (req, res) {
	folderStructure[req.params.folder][req.params.subFolder] = {};
	res.json(folderStructure[req.params.folder]);
}


// *********** DELETE FOLDERS
exports.deleteFolder = function (req, res) {
	delete folderStructure[req.params.folder];
	res.json(folderStructure);
}

exports.deleteSubFolder = function (req, res) {
	delete folderStructure[req.params.folder][req.params.subFolder];
	res.json(folderStructure[req.params.folder]);
}
