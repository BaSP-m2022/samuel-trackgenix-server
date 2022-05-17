import express from 'express';
import projectsControllers from '../controllers/projects';
import projectsValidations from '../validations/projects';

const router = express.Router();

router
  .get('/', projectsControllers.getAllProjects, projectsValidations.validateId)
  .get('/:id', projectsControllers.getProjectById)
  .post('/', projectsValidations.validateCreation, projectsControllers.createProject)
  .delete('/:id', projectsValidations.validateId, projectsControllers.deleteProject)
  .put('/:id', projectsValidations.validateEdit, projectsControllers.editProject);

export default router;
