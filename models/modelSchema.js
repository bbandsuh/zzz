var modelSchema = new mongoose.Schema( {

  username:  { type: String, required: true },
  model:     { type: String, required: true },
  level:     { type: String, required: true },
  procarea:  { type: String, required: false },
  rqmt:      { type: String, required: true },
  criteria:  { type: String, required: false },
  date:      { type: Date,   required: true, default: Date.now },
});

module.exports = mongoose.model('modelSchema', modelSchema);
