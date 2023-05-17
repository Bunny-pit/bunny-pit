import mongoose, { Schema } from "mongoose";

// 참여자 스키마
const participantSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chatRoom: {
    type: Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
});

const Participant = mongoose.model("Participant", participantSchema);

export default Participant;
