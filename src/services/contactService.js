// src/services/contactService.js
import { supabase } from './supabase.js';

export const insertContactApi = async (data) => {
  try {
    if (!supabase) {
      console.warn('Supabase is not initialized. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      return {
        success: false,
        error: {
          message: 'Contact service is temporarily offline. Please contact directly via email.',
        },
      };
    }

    const { data: result, error } = await supabase
      .from('contact')
      .insert([data]);

    if (error) {
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Insert error:', error);
    return { success: false, error };
  }
};

