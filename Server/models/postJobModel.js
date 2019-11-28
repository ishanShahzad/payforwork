const mongoose = require("mongoose");

const postJobSchema = new mongoose.Schema({
  presonalDetails: {
    eMail: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  jobDetails: {
    jobTitle: {
      type: String,
      required: true
    },
    jobDescription: {
      type: String,
      required: true
    },
    detailsFile: {
      type: String
    }
  },
  categoryAndSkills: {
    category: {
      type: String,
      required: true
    },
    skill: {
      type: Array
    }
  },
  budget: {
    paymentMethod: {
      type: String,
      required: true
    },
    budget: {
      type: String,
      required: true
    },
    workLocation: {
      type: String,
      required: true
    }
  },
  projectSpecial: {
    featured: {
      type: Boolean,
      default: false
    },
    urgent: {
      type: Boolean,
      default: true
    },
    skilled: {
      type: Boolean,
      default: true
    }
  }
});
module.exports = new mongoose.model("PostaJob", postJobSchema);
