
// Just a fake in-mem folderStructure for testing purposes
var folderStructure = {
	'media' : {
		'documents' : ''
	}
}


exports.rootFolder = function (req, res) {
	res.json(Object.keys(folderStructure));
}

exports.subFolder1 = function (req, res) {
	var subfFolderName = req.params.subFolder1;
	res.json(Object.keys(folderStructure[subfFolderName]));
}