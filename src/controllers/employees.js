import EmployeeModel from '../models/Employees';

const getAllEmployee = async (req, res) => {
  try {
    let employeeAll = 0;
    if (req.query) {
      employeeAll = await EmployeeModel.find(req.query);
      if (employeeAll.length === 0) {
        return res.status(404).json({
          message: 'You must enter a correct query',
          data: undefined,
          error: true,
        });
      }
    } else { employeeAll = EmployeeModel.find({}); }
    return res.status(200).json({
      message: 'The list has been successfully retrieved',
      data: employeeAll,
      error: false,
    });
  } catch (error) {
    return res.json({
      message: 'Error',
      data: undefined,
      error: true,
    });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    if (req.params.id) {
      const employeesId = await EmployeeModel.findById(req.params.id);
      return res.status(200).json({
        message: `This employee with ID ${req.params.id} has been found`,
        data: employeesId,
        error: false,
      });
    }
    return res.status(400).json({
      message: `This employee with ID ${req.params.id} is incorrect`,
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.json({
      message: 'Error',
      data: undefined,
      error: true,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    if (req.params.id) {
      const employeeDelete = await EmployeeModel.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        message: `This employee with ID ${req.params.id} has been eliminated`,
        data: employeeDelete,
        error: false,
      });
    }
    return res.status(400).json({
      message: `This employee with ID ${req.params.id} was not deleted`,
      data: undefined,
      error: true,
    });
  } catch (error) {
    return res.json({
      message: 'Error',
      data: undefined,
      error: true,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const itExist = await EmployeeModel.findOne({ email: req.body.email });
    if (itExist) {
      return res.status(400).json({
        message: 'Employee account with this email already exists',
        data: undefined,
        error: true,
      });
    }
    const employee = new EmployeeModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      country: req.body.country,
      city: req.body.city,
      zip: req.body.zip,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      active: req.body.active,
      firebaseUid: req.body.firebaseUid,
    });
    const succes = await employee.save();
    return res.status(201).json({
      message: 'Employee created succesfully',
      data: succes,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: `An error has occurred: ${error}`,
      data: undefined,
      error: true,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const succes = await EmployeeModel.findByIdAndUpdate(
      employeeId,
      req.body,
      { new: true },
    );
    if (!succes) {
      return res.status(404).json({
        message: `Employee account with ID "${req.params.id}" can not be found.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Employee account with ID "${req.params.id}" updated succesfully`,
      data: req.body,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: `An error has ocurred: ${error}`,
      data: undefined,
      error: true,
    });
  }
};

export default {
  getAllEmployee,
  getEmployeeById,
  deleteEmployee,
  createEmployee,
  updateEmployee,
};
