export type Priority = 'Emergency' | 'Urgent' | 'Elective';

export type PreOpStatus = 'available' | 'pending' | 'review' | 'not-available';

export interface PreOpClearance {
  financial: PreOpStatus;
  crossmatch: PreOpStatus;
  clinical: PreOpStatus;
  consent: PreOpStatus;
  pacStatus: 'Investigations Pending' | 'Fit to Proceed' | 'Not Fit to Proceed' | 'Anaesthetist review required';
  pacType?: 'warning' | 'success' | 'danger' | 'alert';
  notes?: string;
}

export interface ClinicalIndicators {
  allergies: string[];
  comorbidities: string[];
  asaScore: string;
  metScore: string;
  bmi: string;
  count: number;
}

export interface SurgicalTeamMember {
  role: string;
  name: string;
}

export interface SurgicalRequirements {
  instruments: { name: string; count: number }[];
  consumables: { name: string; count: number }[];
  bloodProducts: { name: string; units: number }[];
  implants: { name: string; count: number }[];
  devices: { name: string; count: number; conflict?: boolean }[];
  miscellaneous: { name: string; count: number }[];
  requiresBiopsy?: boolean;
  notes?: string;
}

export interface SurgeryCase {
  id: string;
  mrn: string;
  patientName: string;
  age: number;
  gender: 'M' | 'F' | 'Other';
  dob: string;
  bloodGroup: string;
  surgeon: string;
  surgeryName: string;
  department: string;
  priority: Priority;
  preOpClearance: PreOpClearance;
  clinicalIndicators: ClinicalIndicators;
  patientStatus: 'Marked for IP' | 'Under IP Care' | 'Admitted to IP';
  requestDate: string;
  requestTime: string;
  timeAgo: string;
  orStatus: 'Requested' | 'Scheduled' | 'Completed' | 'Ongoing' | 'Cancelled' | 'Deferred';
  scheduledDate?: string;
  scheduledStartTime?: string;
  scheduledEndTime?: string;
  scheduledOT?: string;
  diagnosis?: string;
  duration?: string;
  surgicalTeam?: SurgicalTeamMember[];
  requirements?: SurgicalRequirements;
}

export interface TimelineSlot {
  id: string;
  otId: string; // e.g. "OT - 1"
  surgeryTitle: string;
  doctorName: string;
  patientName?: string;
  patientDetails?: string;
  startTime: string; // "12:00"
  endTime: string;   // "13:30"
  status: 'Completed' | 'In Progress' | 'Scheduled' | 'Requested' | 'Cancelled' | 'Deferred' | 'Maintenance';
  isMaintenance?: boolean;
  notes?: string;
}

export interface WorkflowTask {
  id: string;
  number: number;
  question: string;
  required: boolean;
  answer?: 'Yes' | 'No' | null;
}

export interface WorkflowStage {
  id: string;
  name: string;
  time?: string;
  status: 'completed' | 'in-progress' | 'pending';
  assignedTo?: string;
  tasks: WorkflowTask[];
}

export interface LiveSurgeryItem {
  id: string;
  orNumber: string; // "OR - 2"
  surgeryName: string;
  specialty: string;
  patientName: string;
  patientDemographics: string;
  bloodGroup: string;
  mrn: string;
  surgeon: string;
  anesthetist: string;
  careTeamDoctors: number;
  careTeamNurses: number;
  currentStatus: string;
  startTime: string;
  endTime: string;
  delayText?: string;
  isDelayed?: boolean;
  preOpClearance: PreOpClearance;
  tasksCompleted: number;
  tasksTotal: number;
  priority: Priority;
  stagesCompletedIndex: number; // 0 to 5 for live OT columns
}

export interface KanbanStageColumn {
  id: string;
  title: string;
  headerColor: string;
  cards: {
    id: string;
    otNumber: string;
    priority?: Priority;
    surgeryName: string;
    surgeon: string;
    patientInfo: string;
    timeText: string;
    delayBadge?: { text: string; isDelayed: boolean };
  }[];
}

