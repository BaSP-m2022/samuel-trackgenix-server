import mongoose from 'mongoose';

const { Schema } = mongoose.Schema;

const timeSheetSchema = new Schema({
  project: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: true,
  },
  weekSprint: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  hoursProject: {
    type: Number,
    required: true,
  },
  workDescription: {
    type: String,
    required: true,
  },
});

export default mongoose.model('TimeSheet', timeSheetSchema);
