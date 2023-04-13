export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string | null;
          country: Database['public']['Enums']['country_code'] | null;
          id: number;
          postal_code: string | null;
          street: string | null;
        };
        Insert: {
          city?: string | null;
          country?: Database['public']['Enums']['country_code'] | null;
          id?: number;
          postal_code?: string | null;
          street?: string | null;
        };
        Update: {
          city?: string | null;
          country?: Database['public']['Enums']['country_code'] | null;
          id?: number;
          postal_code?: string | null;
          street?: string | null;
        };
      };
      users: {
        Row: {
          address: number | null;
          birth_date: string | null;
          email: string | null;
          firstname: string | null;
          id: number;
          lastname: string | null;
        };
        Insert: {
          address?: number | null;
          birth_date?: string | null;
          email?: string | null;
          firstname?: string | null;
          id?: number;
          lastname?: string | null;
        };
        Update: {
          address?: number | null;
          birth_date?: string | null;
          email?: string | null;
          firstname?: string | null;
          id?: number;
          lastname?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      country_code: 'DE' | 'US' | 'UK' | 'ES';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
