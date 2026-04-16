import path from "path";
import { parseResume } from "../../utils/parseResume.js";

export const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded"
    });
  }

  
  res.status(200).json({
    success: true,
    message: "Resume uploaded successfully",
    file: {
      originalName: req.file.originalname,
      storedName: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      size: `${(req.file.size / 1024).toFixed(2)} KB`,
      mimeType: req.file.mimetype
    }
  });
};

export const analyzeResume = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No resume file uploaded. Use form-data key `resume`.",
    });
  }

  const fileExtension = path.extname(req.file.originalname).toLowerCase();
  if (fileExtension !== ".pdf") {
    return res.status(400).json({
      success: false,
      message: "Only PDF files are supported for resume analysis right now",
    });
  }

  try {
    const parsedData = await parseResume(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Resume parsed successfully",
      data: parsedData,
      file: {
        originalName: req.file.originalname,
        storedName: req.file.filename,
        path: `/uploads/${req.file.filename}`,
        size: `${(req.file.size / 1024).toFixed(2)} KB`,
        mimeType: req.file.mimetype,
      },
    });
  } catch (error) {
    const knownMessages = new Set([
      "Only PDF parsing is supported on /analyze right now",
      "Unable to extract text from resume",
    ]);

    return res.status(400).json({
      success: false,
      message: knownMessages.has(error.message)
        ? error.message
        : "Unable to extract text from resume",
    });
  }
};

export const getResumeResult = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: `Fetching resume result for ID: ${id}`
  });
};

