import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    members: [
      {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        role: { type: String, required: true, enum: ['DEV', 'QA', 'PM', 'TL'] },
        rate: { type: Number, required: true },
      },
    ],
    startDate: { type: Date, required: true },
    finishDate: { type: Date, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true },
    client: { type: String, required: true },
  },
);

export default mongoose.model('Project', projectSchema);
