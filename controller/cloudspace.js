
// Just a fake in-mem folderStructure for testing purposes
var folderStructure = {
	'media' : {
		'documents' : 'Hello World'
	}
}


exports.getRootFolder = function (req, res) {
	res.json(Object.keys(folderStructure));
}

exports.getFolder = function (req, res) {
	res.json(Object.keys(folderStructure[req.params.folder]));
}
exports.getSubFolder = function (req, res) {
	var folder = req.params.folder;
	var subfFolder = req.params.subFolder;
	res.json(folderStructure[folder][subfFolder]);
}

exports.addFolder = function (req, res) {
	var folderName = req.params.folder;
	folderStructure[folderName] = {};
	res.json(folderStructure[folderName]);
}

exports.addSubFolder = function (req, res) {
	var folderName = req.params.folder;
	var subFolderName = req.params.subFolder;
	folderStructure[folderName][subFolderName] = {};
	res.json(folderStructure[folderName]);
}

exports.deleteFolder = function (req, res) {
	delete folderStructure[req.params.folder];
	res.json(Object.keys(folderStructure));
}

exports.deleteSubFolder = function (req, res) {
	var folderName = req.params.folder;
	delete folderStructure[folderName][req.params.subfolder];
	res.json(folderStructure[folderName]);
}