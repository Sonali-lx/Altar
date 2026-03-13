import Meditation from "../../models/meditationModel.js";

const createQuietTime = async (req, res) => {
  try {
    const entry = new Meditation({
      day: req.body.day,
      passaye: req.body.passage,
      entryType: "quiettime",
      quietTime: req.body.quietTime,
    });
    await entry.save();
    res.status(202).json(entry);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error creating quiet time entry: ${error.message}` });
  }
};

const getQuietTimeEntries = async (req, res) => {
  try {
    const entries = await Meditation.find({ entryType: "quiettime" });
    res.status(200).json(entries);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error fetching quiet time entries: ${error.message}` });
  }
};

export { createQuietTime, getQuietTimeEntries };
