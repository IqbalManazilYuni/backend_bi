import mongoose from "mongoose";

const Pelanggaran = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  keterangan: {
    type: String,
    required: true,
  },
  Kurangpoint: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // Merujuk ke model "Users"
    required: true,
  },
});

export default mongoose.model("Pelanggaran", Pelanggaran);
