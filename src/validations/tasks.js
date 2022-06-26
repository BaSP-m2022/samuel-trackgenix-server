import Joi from 'joi';
import mongoose from 'mongoose';

const validateCreate = (req, res, next) => {
  const taskJoiSchema = Joi.object({
    firebaseUid: Joi.string().required(),
    nameProject: Joi.string().required(),
    week: Joi.number().required(),
    day: Joi.number().required(),
    description: Joi.string().required(),
    hours: Joi.number().required(),
  });

  const validation = taskJoiSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      message: `Error validating a field. Error: ${validation.error.message}`,
      data: undefined,
      error: true,
    });
  }

  return next();
};

const validateEdit = (req, res, next) => {
  const taskJoiSchema = Joi.object({
    firebaseUid: Joi.string(),
    nameProject: Joi.string(),
    week: Joi.number(),
    day: Joi.number(),
    description: Joi.string(),
    hours: Joi.number(),
  });

  const validation = taskJoiSchema.validate(req.body);

  if (validation.error) {
    return res.status(400).json({
      message: `Error validating a field. Error: ${validation.error.message}`,
      data: undefined,
      error: true,
    });
  }

  return next();
};

const validateId = (req, res, next) => {
  const validation = mongoose.isValidObjectId(req.params.id);
  if (!validation) {
    return res.status(400).json({
      message: `The value ${req.param.id} is not a valid id.`,
      data: undefined,
      error: true,
    });
  }

  return next();
};

export default {
  validateCreate,
  validateEdit,
  validateId,
};
