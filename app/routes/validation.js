// Import required controllers and Express Router
import { 
    getAllValidation, 
    getValidationById, 
    createValidation, 
    updateValidation, 
    deleteValidation 
  } from "../controllers/validation.js";
  import { Router } from "express";
  
  // Initialize a new instance of the Express Router
  const validationRouter = Router();
  
  // Define routes for validation
  validationRouter.get("/", getAllValidation); // Retrieve all validations
  validationRouter.get("/:id", getValidationById); // Retrieve a validation by ID
  validationRouter.post("/", createValidation); // Create a new validation
  validationRouter.put("/:id", updateValidation); // Update an existing validation
  validationRouter.delete("/:id", deleteValidation); // Delete a validation
  
  // Export the validation router
  export default validationRouter;
  