export interface MediaAssets {
  branding: {
    logo_main: string;
    logo_white: string;
    favicon: string;
    social_card: string;
  };
  hero: {
    home: string;
    about: string;
    programs: string;
    contact: string;
    donate: string;
    gallery: string;
  };
  programs: {
    food_bank: string;
    youth_leadership: string;
    women_empowerment: string;
    mental_health: string;
    financial_literacy: string;
    newcomers_settlement: string;
    capital_g_girls: string;
    heart_wise_seniors: string;
    new_breed_women: string;
    javascript_program: string;
  };
  events: {
    christmas_2024: string;
    summer_camp: string;
    sankofa_awards: string;
    cultural_events: string;
    black_business_seminar: string;
  };
  gallery: {
    food_bank: string[];
    community: string[];
    youth: string[];
    awards: string[];
    cultural: string[];
    workshops: string[];
  };
  flyers: {
    black_business_seminar: string;
    summer_camp_2025: string;
    christmas_event: string;
  };
  trainings: {
    mental_health: string;
    financial_literacy: string;
    leadership: string;
  };
  documents: {
    annual_report_2024: string;
    annual_report_2023: string;
    program_guide: string;
    donation_form: string;
    volunteer_application: string;
    partnership_proposal: string;
    community_impact_report: string;
    financial_statement_2024: string;
    bylaws: string;
    code_of_conduct: string;
    privacy_policy: string;
    terms_of_service: string;
  };
  videos: {
    hero_background: string;
    about_intro: string;
    testimonials: string;
    program_overview: string;
    community_impact: string;
  };
}

export interface MediaContextType {
  assets: MediaAssets | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}
