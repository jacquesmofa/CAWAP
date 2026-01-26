import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jibuowzrmtslmnahvgut.supabase.co';
const supabasePublishableKey = 'sb_publishable_RSRpm3gYjTQt3TMEoFt7Uw_8qC_6bC4';

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

// Database Types
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at?: string;
}

export interface DonationRecord {
  id?: string;
  donor_name: string;
  donor_email: string;
  amount: number;
  donation_type: 'one-time' | 'monthly';
  message?: string;
  created_at?: string;
}

export interface EventRegistration {
  id?: string;
  event_id: string;
  event_name: string;
  participant_name: string;
  participant_email: string;
  participant_phone?: string;
  number_of_attendees?: number;
  created_at?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  subscribed_at?: string;
}
