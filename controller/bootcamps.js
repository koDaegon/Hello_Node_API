

// @desc      Get all boootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}


// @desc      Get sigle boootcamps
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
}


// @desc      Create all boootcamps
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamps'});
}


// @desc      Update boootcamps
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamps ${req.params.id}`});
}

// @desc      Delete boootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamps ${req.params.id}`});
}


