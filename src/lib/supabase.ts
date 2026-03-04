// ═══════════════════════════════════════════════════════════════
//  lib/supabase.ts  — Supabase stub (sin dependencia del paquete)
//  Para usar Supabase real: npm install @supabase/supabase-js
//  y configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY
// ═══════════════════════════════════════════════════════════════
import type { RoutineTemplate, TemplateMeta, WeekTemplate } from '@/types/workout.types'

const url = import.meta.env.VITE_SUPABASE_URL as string
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string
const hasConfig = Boolean(url && key && url !== 'https://tu-proyecto.supabase.co')

// ── Stub client (sin @supabase/supabase-js) ───────────────────

const stubAuth = {
  getUser: async () => ({ data: { user: null }, error: null }),
}

const stubFrom = () => ({
  select: () => ({ eq: () => ({ order: () => ({ single: async () => ({ data: null, error: { message: 'Supabase no configurado' } }) }) }) }),
  insert: () => ({ select: () => ({ single: async () => ({ data: null, error: { message: 'Supabase no configurado' } }) }) }),
  update: () => ({ eq: () => ({ eq: () => ({ then: () => ({ error: { message: 'Supabase no configurado' } }) }) }) }),
  delete: () => ({ eq: () => ({ error: { message: 'Supabase no configurado' } }) }),
  ilike: () => stubFrom(),
  order: () => stubFrom(),
  single: async () => ({ data: null, error: { message: 'Supabase no configurado' } }),
})

export const supabase = {
  auth: stubAuth,
  from: stubFrom,
  rpc: async () => {},
}

// ── Types ─────────────────────────────────────────────────────

export interface SaveTemplatePayload {
  meta: TemplateMeta
  weeks: WeekTemplate[]
  id?: string
}

export interface RepoResult<T> {
  data: T | null
  error: string | null
}

const NOT_CONFIGURED = 'Supabase no configurado. Instala @supabase/supabase-js y configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.'

// ── Repository (stub) ────────────────────────────────────────

export const routineTemplateRepo = {
  async save(_payload: SaveTemplatePayload): Promise<{ id: string; error: string | null }> {
    if (!hasConfig) return { id: '', error: NOT_CONFIGURED }
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { id: '', error: 'Not authenticated' }
    return { id: '', error: NOT_CONFIGURED }
  },

  async fetchById(_id: string): Promise<RepoResult<RoutineTemplate>> {
    if (!hasConfig) return { data: null, error: NOT_CONFIGURED }
    return { data: null, error: NOT_CONFIGURED }
  },

  async fetchMine(): Promise<RepoResult<RoutineTemplate[]>> {
    if (!hasConfig) return { data: [], error: null }
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { data: [], error: 'Not authenticated' }
    return { data: [], error: null }
  },

  async fetchPublic(): Promise<RepoResult<RoutineTemplate[]>> {
    if (!hasConfig) return { data: [], error: null }
    return { data: [], error: null }
  },

  async publish(_id: string): Promise<{ error: string | null }> {
    if (!hasConfig) return { error: NOT_CONFIGURED }
    return { error: NOT_CONFIGURED }
  },

  async delete(_id: string): Promise<{ error: string | null }> {
    if (!hasConfig) return { error: NOT_CONFIGURED }
    return { error: null }
  },

  async duplicate(_id: string, _newName: string): Promise<{ id: string; error: string | null }> {
    if (!hasConfig) return { id: '', error: NOT_CONFIGURED }
    return { id: '', error: NOT_CONFIGURED }
  },
}
