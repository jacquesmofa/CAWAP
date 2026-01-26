import { useState } from 'react';
import { supabase } from '../config/supabase';

interface UseSupabaseFormOptions {
  table: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface FormState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const useSupabaseForm = ({ table, onSuccess, onError }: UseSupabaseFormOptions) => {
  const [state, setState] = useState<FormState>({
    loading: false,
    error: null,
    success: false,
  });

  const submitForm = async (data: Record<string, unknown>) => {
    setState({ loading: true, error: null, success: false });

    try {
      const { error } = await supabase
        .from(table)
        .insert([data]);

      if (error) throw error;

      setState({ loading: false, error: null, success: true });
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({ loading: false, error: errorMessage, success: false });
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    }
  };

  const resetState = () => {
    setState({ loading: false, error: null, success: false });
  };

  return {
    ...state,
    submitForm,
    resetState,
  };
};
