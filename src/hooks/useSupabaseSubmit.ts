/**
 * Custom React Hook for Supabase Form Submissions
 * 
 * This hook provides a reusable way to submit form data to Supabase
 * across your entire application. It handles:
 * - Data validation
 * - Submission to Supabase database
 * - Loading states
 * - Error handling
 * - Success confirmation
 * 
 * LEARNING POINTS:
 * 1. Supabase is a Backend-as-a-Service (BaaS) platform
 * 2. It provides a PostgreSQL database with a simple JavaScript API
 * 3. No need to write backend code - just call the API from frontend
 * 4. Data is automatically validated and stored securely
 */

import { useState } from 'react';
import { supabase } from '../config/supabase';

/**
 * Generic Type Parameter <T>
 * This makes the hook reusable for ANY type of form data
 * T could be ContactFormData, DonationData, EventRegistrationData, etc.
 */
interface UseSupabaseSubmitReturn<T> {
  submitData: (tableName: string, data: T) => Promise<boolean>;
  submitting: boolean;     // Is submission in progress?
  success: boolean;        // Did submission succeed?
  error: string | null;    // Error message if submission fails
  resetState: () => void;  // Function to reset all states
}

/**
 * Main Hook Function
 * 
 * @returns Object with submit function and state variables
 * 
 * USAGE EXAMPLE:
 * const { submitData, submitting, success, error } = useSupabaseSubmit<ContactFormData>();
 * const result = await submitData('contact_submissions', formData);
 */
export const useSupabaseSubmit = <T extends Record<string, any>>(): UseSupabaseSubmitReturn<T> => {
  
  // STATE MANAGEMENT
  // Track submission status, success, and errors
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Main Submit Function
   * 
   * This function sends data to your Supabase database
   * 
   * @param tableName - Name of the Supabase table (e.g., 'contact_submissions')
   * @param data - The form data to submit
   * @returns Boolean indicating success or failure
   * 
   * HOW IT WORKS:
   * 1. Validates the data
   * 2. Sends it to Supabase using the .insert() method
   * 3. Supabase stores it in the specified table
   * 4. Returns success/failure status
   */
  const submitData = async (tableName: string, data: T): Promise<boolean> => {
    
    // STEP 1: RESET STATE
    // Clear previous errors and success states
    setError(null);
    setSuccess(false);
    setSubmitting(true);

    try {
      // STEP 2: ADD TIMESTAMP
      // Add a created_at timestamp to track when the submission was made
      // This is useful for sorting and filtering data later
      const dataWithTimestamp = {
        ...data,  // Spread operator copies all properties from data
        created_at: new Date().toISOString()  // ISO format: "2024-01-15T10:30:00.000Z"
      };

      // STEP 3: INSERT INTO SUPABASE
      // The supabase.from() method selects the table
      // The .insert() method adds new data
      // The .select() method returns the inserted data (optional, for confirmation)
      const { data: result, error: supabaseError } = await supabase
        .from(tableName)           // Select the table
        .insert([dataWithTimestamp]) // Insert the data (array format required)
        .select();                  // Return the inserted data

      // STEP 4: CHECK FOR ERRORS
      // Supabase returns an error object if something went wrong
      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      // STEP 5: VERIFY DATA WAS INSERTED
      // Check if we got data back (confirms successful insertion)
      if (!result || result.length === 0) {
        throw new Error('No data returned from database');
      }

      // STEP 6: SUCCESS!
      // Set success state to true (can show success message in UI)
      setSuccess(true);
      
      // Log success for debugging
      console.log('✅ Data submitted successfully:', result);
      
      return true;

    } catch (err) {
      // STEP 7: HANDLE ERRORS
      // If anything goes wrong, catch the error and store it
      const errorMessage = err instanceof Error ? err.message : 'Submission failed';
      setError(errorMessage);
      
      // Log error for debugging
      console.error('❌ Submission error:', err);
      
      return false;

    } finally {
      // STEP 8: CLEANUP
      // This runs whether submission succeeds or fails
      // Reset submitting state
      setSubmitting(false);
    }
  };

  /**
   * Reset Function
   * 
   * Clears all states back to initial values
   * Useful for resetting the form after successful submission
   */
  const resetState = () => {
    setSubmitting(false);
    setSuccess(false);
    setError(null);
  };

  // RETURN THE HOOK'S PUBLIC API
  return {
    submitData,   // Function to call for submitting data
    submitting,   // Boolean: is submission in progress?
    success,      // Boolean: did submission succeed?
    error,        // String or null: error message
    resetState    // Function: reset all states
  };
};

/**
 * EXAMPLE: Contact Form Submission
 * 
 * interface ContactFormData {
 *   name: string;
 *   email: string;
 *   message: string;
 * }
 * 
 * function ContactForm() {
 *   const { submitData, submitting, success, error } = useSupabaseSubmit<ContactFormData>();
 *   
 *   const handleSubmit = async (e: React.FormEvent) => {
 *     e.preventDefault();
 *     
 *     const formData: ContactFormData = {
 *       name: 'John Doe',
 *       email: 'john@example.com',
 *       message: 'Hello!'
 *     };
 *     
 *     const result = await submitData('contact_submissions', formData);
 *     
 *     if (result) {
 *       alert('Message sent successfully!');
 *     }
 *   };
 *   
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       {submitting && <p>Sending...</p>}
 *       {success && <p>Success!</p>}
 *       {error && <p>Error: {error}</p>}
 *       <button type="submit" disabled={submitting}>Send</button>
 *     </form>
 *   );
 * }
 */

/**
 * SUPABASE TABLE STRUCTURE
 * 
 * Your tables in Supabase should have these columns:
 * 
 * contact_submissions:
 * - id (uuid, primary key, auto-generated)
 * - name (text)
 * - email (text)
 * - phone (text, optional)
 * - message (text)
 * - created_at (timestamp)
 * 
 * donation_records:
 * - id (uuid, primary key, auto-generated)
 * - donor_name (text)
 * - email (text)
 * - amount (numeric)
 * - donation_type (text)
 * - message (text, optional)
 * - created_at (timestamp)
 * 
 * event_registrations:
 * - id (uuid, primary key, auto-generated)
 * - name (text)
 * - email (text)
 * - phone (text)
 * - event_name (text)
 * - created_at (timestamp)
 * 
 * newsletter_subscriptions:
 * - id (uuid, primary key, auto-generated)
 * - email (text, unique)
 * - created_at (timestamp)
 */
