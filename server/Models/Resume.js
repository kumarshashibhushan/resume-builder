import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    title: { type: String, default: "Untitled Resume" },

    public: { type: Boolean, default: false }, // FIXED

    template: { type: String, default: "classic" }, // FIXED

    accent_color: { type: String, default: "#3B82F6" }, // ADDED

    professional_summary: { type: String, default: "" },

    skills: [{ type: String }],

    personal_info: {
      image: { type: String, default: "" },
      full_name: { type: String, default: "" },
      profession: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      location: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      website: { type: String, default: "" },
    },

    experience: [
      {
        company: String,
        position: String,
        start_date: String,
        end_date: String,
        description: String,
        is_current: Boolean,
      },
    ],

    projects: [
      {
        name: { type: String, default: "" },
        type: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],

    education: [
      {
        institution: String,
        degree: String,
        field: String,
        graduation_date: String,
        gpa: String,
      },
    ],
  },
  { timestamps: true, minimize: false }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
