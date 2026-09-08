import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUserProgress(userId: string): Promise<number> {
  try {
    const { data } = await supabase
      .from('user_progress')
      .select('last_level')
      .eq('user_id', userId)
      .single();
    return data?.last_level ?? 1;
  } catch { return 1; }
}

export async function saveUserProgress(userId: string, level: number): Promise<void> {
  try {
    await supabase.from('user_progress').upsert({
      user_id: userId,
      last_level: level,
      updated_at: new Date().toISOString()
    });
  } catch {}
}
