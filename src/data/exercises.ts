export interface Exercise {
  id: number
  name: string
  muscle: string
  group: string
  eq: string
  emoji: string
  meta: string
  diff: 'Principiante' | 'Intermedio' | 'Avanzado'
}

export interface MuscleColor {
  bg: string
  text: string
  bar: string
}

export interface TemplateCategory {
  id: string
  label: string
  icon: string
}

export const EXERCISES: Exercise[] = [
  { id: 1,  name: 'Sentadilla con Barra',       muscle: 'legs',      group: 'Piernas',  eq: 'barbell',    emoji: '🏋️', meta: 'Cuádriceps · Glúteos',   diff: 'Avanzado'     },
  { id: 2,  name: 'Press de Banca',              muscle: 'chest',     group: 'Pecho',    eq: 'barbell',    emoji: '💪', meta: 'Pectorales · Tríceps',  diff: 'Intermedio'   },
  { id: 3,  name: 'Peso Muerto Convencional',    muscle: 'back',      group: 'Espalda',  eq: 'barbell',    emoji: '🔩', meta: 'Isquios · Lumbar',       diff: 'Avanzado'     },
  { id: 4,  name: 'Dominadas',                   muscle: 'back',      group: 'Espalda',  eq: 'bodyweight', emoji: '⬆️', meta: 'Dorsal · Bíceps',        diff: 'Intermedio'   },
  { id: 5,  name: 'Press Militar',               muscle: 'shoulders', group: 'Hombros',  eq: 'barbell',    emoji: '🎯', meta: 'Deltoides · Tríceps',    diff: 'Intermedio'   },
  { id: 6,  name: 'Curl de Bíceps',              muscle: 'arms',      group: 'Brazos',   eq: 'dumbbell',   emoji: '🦾', meta: 'Bíceps',                 diff: 'Principiante' },
  { id: 7,  name: 'Extensión Tríceps',           muscle: 'arms',      group: 'Brazos',   eq: 'machine',    emoji: '⚙️', meta: 'Tríceps',                 diff: 'Principiante' },
  { id: 8,  name: 'Hip Thrust',                  muscle: 'legs',      group: 'Piernas',  eq: 'barbell',    emoji: '🦵', meta: 'Glúteos · Isquios',      diff: 'Intermedio'   },
  { id: 9,  name: 'Face Pull',                   muscle: 'shoulders', group: 'Hombros',  eq: 'machine',    emoji: '🔄', meta: 'Deltoides Post.',         diff: 'Principiante' },
  { id: 10, name: 'Plancha',                     muscle: 'core',      group: 'Core',     eq: 'bodyweight', emoji: '🧱', meta: 'Core · Abdomen',         diff: 'Principiante' },
  { id: 11, name: 'RDL con Mancuernas',          muscle: 'legs',      group: 'Piernas',  eq: 'dumbbell',   emoji: '🦴', meta: 'Isquios · Glúteos',      diff: 'Intermedio'   },
  { id: 12, name: 'Remo con Barra',              muscle: 'back',      group: 'Espalda',  eq: 'barbell',    emoji: '🚣', meta: 'Dorsal · Trapecios',     diff: 'Intermedio'   },
  { id: 13, name: 'Fondos en Paralelas',         muscle: 'chest',     group: 'Pecho',    eq: 'bodyweight', emoji: '↘️', meta: 'Pecho · Tríceps',         diff: 'Intermedio'   },
  { id: 14, name: 'Jalón al Pecho',              muscle: 'back',      group: 'Espalda',  eq: 'machine',    emoji: '⬇️', meta: 'Dorsal · Bíceps',         diff: 'Principiante' },
  { id: 15, name: 'Bulgarian Split Squat',       muscle: 'legs',      group: 'Piernas',  eq: 'dumbbell',   emoji: '🦿', meta: 'Cuádriceps · Glúteos',   diff: 'Avanzado'     },
  { id: 16, name: 'Aperturas con Mancuernas',    muscle: 'chest',     group: 'Pecho',    eq: 'dumbbell',   emoji: '🦅', meta: 'Pectorales',              diff: 'Principiante' },
  { id: 17, name: 'Elevaciones Laterales',       muscle: 'shoulders', group: 'Hombros',  eq: 'dumbbell',   emoji: '🔼', meta: 'Deltoides Lateral',       diff: 'Principiante' },
  { id: 18, name: 'Crunch Abdominal',            muscle: 'core',      group: 'Core',     eq: 'bodyweight', emoji: '🌀', meta: 'Recto Abdominal',         diff: 'Principiante' },
  { id: 19, name: 'Sentadilla Goblet',           muscle: 'legs',      group: 'Piernas',  eq: 'dumbbell',   emoji: '🥂', meta: 'Cuádriceps · Core',       diff: 'Principiante' },
  { id: 20, name: 'Press Hombro Mancuernas',     muscle: 'shoulders', group: 'Hombros',  eq: 'dumbbell',   emoji: '☝️', meta: 'Deltoides · Tríceps',     diff: 'Principiante' },
]

export const MUSCLE_BAR_COLORS: Record<string, string> = {
  Piernas:  '#9b59b6',
  Pecho:    '#ef4444',
  Espalda:  '#3b82f6',
  Hombros:  '#f59e0b',
  Brazos:   '#22c55e',
  Core:     '#f97316',
}

export const DIFF_STYLES: Record<string, { bg: string; text: string }> = {
  Principiante: { bg: 'bg-green-100',  text: 'text-green-700'  },
  Intermedio:   { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  Avanzado:     { bg: 'bg-red-100',    text: 'text-red-600'    },
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  { id: 'hypertrophy', label: 'Hipertrofia',       icon: '💪' },
  { id: 'strength',    label: 'Fuerza',             icon: '🏋️' },
  { id: 'endurance',   label: 'Resistencia',        icon: '🏃' },
  { id: 'mobility',    label: 'Movilidad',          icon: '🧘' },
  { id: 'fullbody',    label: 'Cuerpo Completo',    icon: '⚡' },
]
