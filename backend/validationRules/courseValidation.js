const { body } = require('express-validator');

exports.courseValidationRules = () => {
    return [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty().withMessage('Description is required'),
        // Additional validation rules as needed
    ];
};
