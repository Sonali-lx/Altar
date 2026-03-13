import mongoose from "mongoose";

const meditationSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: date.now,
  },
  day: {
    type: String,
  },
  passage: {
    type: String,
  },
  entryType: {
    type: String,
    enum: ["quiettime", "freeform", "pbs", "gbs"],
  },
  quietTime: {
    aboutGod: String,
    sinsToAvoid: String,
    promisesToClaim: String,
    examplesToFollw: String,
    commandmentsToObey: String,
    themeOfThePassasge: String,
  },
  freeForm: String,
});

const Meditation = mongoose.model("Meditation", meditationSchema);
export default Meditation;
