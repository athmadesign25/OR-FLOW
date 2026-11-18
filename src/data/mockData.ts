import { SurgeryCase, TimelineSlot, LiveSurgeryItem, KanbanStageColumn, WorkflowStage } from '../types/orFlow';

export const mockWaitlistCases: SurgeryCase[] = [
  {
    id: 'WL-01',
    mrn: '17650000967215',
    patientName: 'Rajesh K',
    age: 29,
    gender: 'M',
    dob: '05/11/1994',
    bloodGroup: 'O+',
    surgeon: 'Dr. devi Prasad Shetty',
    surgeryName: 'Knee Replacement',
    department: 'Orthopedics',
    priority: 'Emergency',
    preOpClearance: {
      financial: 'pending',
      crossmatch: 'pending',
      clinical: 'pending',
      consent: 'pending',
      pacStatus: 'Investigations Pending',
      pacType: 'warning',
      notes: 'Blood investigations pending in lab'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Hypertension', 'CAD'],
      asaScore: 'ASA IV',
      metScore: '< 4 METs',
      bmi: '29.4',
      count: 3
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '30 min ago',
    orStatus: 'Requested',
    diagnosis: 'Severe Osteoarthritis Right Knee',
    duration: '1h 30mins',
    scheduledOT: 'OT 3',
    scheduledDate: '29 Oct 2025, 14:30',
    surgicalTeam: [
      { role: 'Assistant Surgeon', name: 'Dr. Rahul Kumar' },
      { role: 'Anaesthetist', name: 'Kumar Ravikant' },
      { role: 'Assistant Anaesthetist', name: 'Kumar Ravikant' },
      { role: 'Physician Assistant', name: 'Kumar Ravikant' },
      { role: 'Scrub Nurse', name: 'Sharon DS' },
      { role: 'Floor Nurse', name: 'Krishna Kumar' },
      { role: 'Technician', name: 'Krishna Kumar' },
    ],
    requirements: {
      instruments: [
        { name: 'Sternotomy Set', count: 2 },
        { name: 'Sternal Saw', count: 1 },
        { name: 'Suture Materials', count: 1 }
      ],
      consumables: [
        { name: 'Gloves', count: 5 },
        { name: 'Gauze Pads', count: 5 }
      ],
      bloodProducts: [
        { name: 'Cryo Poor Plasma', units: 2 },
        { name: 'Packed Red Blood Cells (PC)', units: 2 }
      ],
      implants: [
        { name: 'Prosthetic heart valves', count: 2 }
      ],
      devices: [
        { name: 'Sternotomy Set', count: 1 },
        { name: 'Sternal Saw', count: 1, conflict: true },
        { name: 'Suture Materials', count: 2 }
      ],
      miscellaneous: [
        { name: 'Instrument Trolley', count: 1 },
        { name: 'Sterile Drapes', count: 1 },
        { name: 'UPS', count: 1 },
        { name: 'Surgical Lights', count: 2 }
      ],
      requiresBiopsy: false,
      notes: 'Check prosthetic knee component batch prior to induction.'
    }
  },
  {
    id: 'WL-02',
    mrn: '18210000325687',
    patientName: 'Karan D',
    age: 45,
    gender: 'M',
    dob: '25/12/1978',
    bloodGroup: 'B+',
    surgeon: 'Dr. Rohit Desai',
    surgeryName: 'Thyroidectomy',
    department: 'Endocrinology',
    priority: 'Emergency',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Penicillin'],
      comorbidities: ['Hypertension', 'CAD'],
      asaScore: 'ASA IV',
      metScore: '< 4 METs',
      bmi: '26.8',
      count: 4
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '6 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Multinodular Goiter',
    duration: '2h 00mins',
    scheduledOT: 'OT 2',
    scheduledDate: '26 Oct 2025, 10:00',
    surgicalTeam: [
      { role: 'Assistant Surgeon', name: 'Dr. Neha Singh' },
      { role: 'Anaesthetist', name: 'Dr. Priya Nair' },
      { role: 'Scrub Nurse', name: 'Ananya S' },
      { role: 'Floor Nurse', name: 'Suresh M' }
    ]
  },
  {
    id: 'WL-03',
    mrn: '18100000738964',
    patientName: 'Meera L',
    age: 32,
    gender: 'F',
    dob: '14/05/1991',
    bloodGroup: 'O+',
    surgeon: 'Dr. Leela Menon',
    surgeryName: 'Gallbladder Removal',
    department: 'Gastroenterology',
    priority: 'Urgent',
    preOpClearance: {
      financial: 'not-available',
      crossmatch: 'not-available',
      clinical: 'not-available',
      consent: 'not-available',
      pacStatus: 'Not Fit to Proceed',
      pacType: 'danger',
      notes: 'Uncontrolled blood pressure'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Asthma'],
      asaScore: 'ASA IV',
      metScore: '5 METs',
      bmi: '24.2',
      count: 2
    },
    patientStatus: 'Under IP Care',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '12 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Acute Cholecystitis',
    duration: '1h 15mins'
  },
  {
    id: 'WL-04',
    mrn: '18320000874920',
    patientName: 'Pooja R',
    age: 30,
    gender: 'F',
    dob: '06/06/1993',
    bloodGroup: 'A+',
    surgeon: 'Dr. Sameer Choudhary',
    surgeryName: 'Lung Lobectomy',
    department: 'Thoracic Surgery',
    priority: 'Urgent',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Investigations Pending',
      pacType: 'warning'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy'],
      comorbidities: ['Bronchiectasis'],
      asaScore: 'ASA IV',
      metScore: '< 4 METs',
      bmi: '21.5',
      count: 3
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '18 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Right Lower Lobe Mass',
    duration: '3h 30mins'
  },
  {
    id: 'WL-05',
    mrn: '17870000495731',
    patientName: 'Vikram J',
    age: 41,
    gender: 'M',
    dob: '17/07/1982',
    bloodGroup: 'B-',
    surgeon: 'Dr. Nandini Verma',
    surgeryName: 'Appendectomy',
    department: 'General Surgery',
    priority: 'Elective',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'pending',
      clinical: 'available',
      consent: 'not-available',
      pacStatus: 'Investigations Pending',
      pacType: 'warning'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Type 2 Diabetes'],
      asaScore: 'ASA IV',
      metScore: '6 METs',
      bmi: '28.1',
      count: 1
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '20 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Recurrent Appendicitis',
    duration: '1h 00min'
  },
  {
    id: 'WL-06',
    mrn: '17980000641872',
    patientName: 'Sneha M',
    age: 27,
    gender: 'F',
    dob: '09/01/1996',
    bloodGroup: 'AB+',
    surgeon: 'Dr. Kavita Joshi',
    surgeryName: 'Hysterectomy',
    department: 'Gynecology',
    priority: 'Elective',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'pending',
      clinical: 'available',
      consent: 'not-available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Endometriosis'],
      asaScore: '< 4 METs',
      metScore: '4 METs',
      bmi: '23.0',
      count: 3
    },
    patientStatus: 'Admitted to IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '21 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Uterine Fibroids',
    duration: '2h 15mins'
  },
  {
    id: 'WL-07',
    mrn: '17760000128379',
    patientName: 'Anita P',
    age: 35,
    gender: 'F',
    dob: '22/03/1988',
    bloodGroup: 'O-',
    surgeon: 'Dr. Rajesh Kumar',
    surgeryName: 'Cataract Extraction',
    department: 'Ophthalmology',
    priority: 'Elective',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'pending',
      clinical: 'available',
      consent: 'not-available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Myopia'],
      asaScore: '< 4 METs',
      metScore: '7 METs',
      bmi: '22.3',
      count: 2
    },
    patientStatus: 'Admitted to IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '22 hours ago',
    orStatus: 'Requested',
    diagnosis: 'Senile Nuclear Cataract Left Eye',
    duration: '45 mins'
  },
  {
    id: 'WL-08',
    mrn: '18430000586143',
    patientName: 'Devika M',
    age: 36,
    gender: 'M',
    dob: '11/02/1987',
    bloodGroup: 'A-',
    surgeon: 'Dr. Priya Nair',
    surgeryName: 'Hip Arthroscopy',
    department: 'Sports Medicine',
    priority: 'Elective',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'pending',
      clinical: 'available',
      consent: 'not-available',
      pacStatus: 'Anaesthetist review required',
      pacType: 'alert'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Labral Tear'],
      asaScore: 'ASA IV',
      metScore: '5 METs',
      bmi: '25.6',
      count: 1
    },
    patientStatus: 'Admitted to IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '1 month ago',
    orStatus: 'Requested',
    diagnosis: 'Femoroacetabular Impingement',
    duration: '2h 30mins'
  }
];

export const mockScheduledCases: SurgeryCase[] = [
  {
    id: 'SCH-01',
    mrn: '17650000967215',
    patientName: 'Rajesh K',
    age: 29,
    gender: 'M',
    dob: '05/11/1994',
    bloodGroup: 'O+',
    surgeon: 'Dr. devi Prasad Shetty',
    surgeryName: 'Knee Replacement',
    department: 'Orthopedics',
    priority: 'Emergency',
    scheduledOT: 'OR - 6',
    scheduledDate: '24 Oct 2026',
    scheduledStartTime: '12:15',
    scheduledEndTime: '13:45',
    preOpClearance: {
      financial: 'pending',
      crossmatch: 'pending',
      clinical: 'pending',
      consent: 'pending',
      pacStatus: 'Investigations Pending',
      pacType: 'warning'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Hypertension'],
      asaScore: '< 4 METs',
      metScore: '4 METs',
      bmi: '29.4',
      count: 4
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '30 min ago',
    orStatus: 'Scheduled',
    duration: '1h 30mins',
    diagnosis: 'Cataract | Left Eye',
    surgicalTeam: [
      { role: 'Assistant Surgeon', name: 'Dr. Rahul Kumar' },
      { role: 'Anaesthetist', name: 'Kumar Ravikant' },
      { role: 'Scrub Nurse', name: 'Sharon DS' },
      { role: 'Floor Nurse', name: 'Krishna Kumar' }
    ]
  },
  {
    id: 'SCH-02',
    mrn: '18210000325687',
    patientName: 'Karan D',
    age: 45,
    gender: 'M',
    dob: '25/12/1978',
    bloodGroup: 'O+',
    surgeon: 'Dr. Rohit Desai',
    surgeryName: 'Thyroidectomy',
    department: 'Endocrinology',
    priority: 'Urgent',
    scheduledOT: 'OR - 7',
    scheduledDate: '24 Oct 2026',
    scheduledStartTime: '12:15',
    scheduledEndTime: '13:45',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['CAD'],
      asaScore: '< 4 METs',
      metScore: '4 METs',
      bmi: '26.8',
      count: 4
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '6 hours ago',
    orStatus: 'Scheduled',
    duration: '1h 30mins'
  },
  {
    id: 'SCH-03',
    mrn: '18100000738964',
    patientName: 'Meera L',
    age: 32,
    gender: 'F',
    dob: '14/05/1991',
    bloodGroup: 'O+',
    surgeon: 'Dr. Leela Menon',
    surgeryName: 'Gallbladder Removal',
    department: 'Gastroenterology',
    priority: 'Elective',
    scheduledOT: 'OR - 8',
    scheduledDate: '24 Oct 2026',
    scheduledStartTime: '12:15',
    scheduledEndTime: '13:45',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Asthma'],
      asaScore: '< 4 METs',
      metScore: '5 METs',
      bmi: '24.2',
      count: 4
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '12 hours ago',
    orStatus: 'Scheduled',
    duration: '1h 30mins'
  },
  {
    id: 'SCH-04',
    mrn: '18320000874920',
    patientName: 'Pooja R',
    age: 30,
    gender: 'F',
    dob: '06/06/1993',
    bloodGroup: 'O+',
    surgeon: 'Dr. Sameer Choudhary',
    surgeryName: 'Lung Lobectomy',
    department: 'Thoracic Surgery',
    priority: 'Elective',
    scheduledOT: 'OR - 9',
    scheduledDate: '24 Oct 2026',
    scheduledStartTime: '12:15',
    scheduledEndTime: '13:45',
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    },
    clinicalIndicators: {
      allergies: ['Latex Allergy', 'Penicillin'],
      comorbidities: ['Bronchiectasis'],
      asaScore: '< 4 METs',
      metScore: '4 METs',
      bmi: '21.5',
      count: 4
    },
    patientStatus: 'Marked for IP',
    requestDate: '24 Oct 2025',
    requestTime: '13:45',
    timeAgo: '18 hours ago',
    orStatus: 'Scheduled',
    duration: '1h 30mins'
  }
];

export const mockDayTimelineSlots: TimelineSlot[] = [
  {
    id: 'TS-01',
    otId: 'OT - 1',
    surgeryTitle: 'Open Heart Surgery',
    doctorName: 'Dr. Devi Prasad Shetty',
    patientName: 'Anita S',
    patientDetails: 'Anita S (F / 52) • O+ • 17540000857085',
    startTime: '05:30',
    endTime: '08:00',
    status: 'Completed'
  },
  {
    id: 'TS-02',
    otId: 'OT - 1',
    surgeryTitle: 'Liver Transplant',
    doctorName: 'Dr. Neha Singh',
    patientName: 'Rajesh K',
    patientDetails: 'Rajesh K (M / 29) • O+ • 17650000967215',
    startTime: '12:00',
    endTime: '14:30',
    status: 'In Progress'
  },
  {
    id: 'TS-03',
    otId: 'OT - 1',
    surgeryTitle: 'Lap Cholecystectomy',
    doctorName: 'Dr. Priya Nambiar',
    patientName: 'Vikram D',
    startTime: '20:30',
    endTime: '22:30',
    status: 'Scheduled'
  },
  {
    id: 'TS-04',
    otId: 'OT - 2',
    surgeryTitle: 'Liver Transplant',
    doctorName: 'Dr. Vikram Prajapati',
    startTime: '08:30',
    endTime: '11:00',
    status: 'Completed'
  },
  {
    id: 'TS-05',
    otId: 'OT - 3',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Neha Singh',
    startTime: '13:00',
    endTime: '14:30',
    status: 'Scheduled'
  },
  {
    id: 'TS-06',
    otId: 'OT - 4',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Neha Singh',
    startTime: '21:00',
    endTime: '22:30',
    status: 'Cancelled'
  },
  {
    id: 'TS-07',
    otId: 'OT - 5',
    surgeryTitle: 'Liver Transplant',
    doctorName: 'Dr. Vikram Prajapati',
    startTime: '05:30',
    endTime: '08:30',
    status: 'Completed'
  },
  {
    id: 'TS-08',
    otId: 'OT - 6',
    surgeryTitle: 'Spine Fusion',
    doctorName: 'Dr. Neha Singh',
    startTime: '18:00',
    endTime: '19:30',
    status: 'Cancelled'
  },
  {
    id: 'TS-09',
    otId: 'OT - 7',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Rohan Verma',
    startTime: '13:00',
    endTime: '14:30',
    status: 'Requested'
  },
  {
    id: 'TS-10',
    otId: 'OT - 8',
    surgeryTitle: 'Appendectomy',
    doctorName: 'Dr. R. Shah',
    startTime: '07:30',
    endTime: '09:00',
    status: 'Completed'
  },
  {
    id: 'TS-11',
    otId: 'OT - 8',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Karan Mehta',
    startTime: '22:00',
    endTime: '23:30',
    status: 'Scheduled'
  },
  {
    id: 'TS-12',
    otId: 'OT - 9',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Aisha Khan',
    startTime: '16:30',
    endTime: '18:00',
    status: 'Deferred'
  },
  {
    id: 'TS-13',
    otId: 'OT - 10',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Neha Singh',
    startTime: '11:00',
    endTime: '13:30',
    status: 'In Progress'
  },
  {
    id: 'TS-14',
    otId: 'OT - 10',
    surgeryTitle: 'Under Maintenance',
    doctorName: 'Clinical Engineering',
    startTime: '14:00',
    endTime: '20:00',
    status: 'Maintenance',
    isMaintenance: true,
    notes: 'Scheduled HEPA Filter Replacement & Sterilisation'
  },
  {
    id: 'TS-15',
    otId: 'OT - 11',
    surgeryTitle: 'Cataract Surgery',
    doctorName: 'Dr. Meera Nair',
    startTime: '19:30',
    endTime: '21:00',
    status: 'Deferred'
  }
];

export const mockLiveSurgeries: LiveSurgeryItem[] = [
  {
    id: 'LIVE-01',
    orNumber: 'OR - 2',
    surgeryName: 'Open Heart Surgery',
    specialty: 'General Surgery',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. Maya Patel',
    anesthetist: 'Dr. Daniel Wong',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Patient Positioning',
    startTime: '13:45',
    endTime: '13:45',
    delayText: '30mins delay',
    isDelayed: true,
    tasksCompleted: 5,
    tasksTotal: 30,
    priority: 'Emergency',
    stagesCompletedIndex: 3,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  },
  {
    id: 'LIVE-02',
    orNumber: 'OR - 3',
    surgeryName: 'Open Heart Surgery',
    specialty: 'Ophthalmology',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. James Wilson',
    anesthetist: 'Dr. Aisha Rahman',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Airway & Monitoring',
    startTime: '13:45',
    endTime: '13:45',
    delayText: 'On Time',
    isDelayed: false,
    tasksCompleted: 5,
    tasksTotal: 30,
    priority: 'Emergency',
    stagesCompletedIndex: 1,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  },
  {
    id: 'LIVE-03',
    orNumber: 'OR - 4',
    surgeryName: 'Open Heart Surgery',
    specialty: 'Orthopedics',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. Sofia Ramirez',
    anesthetist: 'Dr. Priya Nair',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Wound Closure',
    startTime: '13:45',
    endTime: '13:45',
    delayText: '30mins delay',
    isDelayed: true,
    tasksCompleted: 14,
    tasksTotal: 20,
    priority: 'Urgent',
    stagesCompletedIndex: 4,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  },
  {
    id: 'LIVE-04',
    orNumber: 'OR - 6',
    surgeryName: 'Open Heart Surgery',
    specialty: 'Gastrointestinal Surgery',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. Ethan Chen',
    anesthetist: 'Dr. Carter',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Airway & Monitoring',
    startTime: '13:45',
    endTime: '13:45',
    delayText: 'On Time',
    isDelayed: false,
    tasksCompleted: 5,
    tasksTotal: 30,
    priority: 'Emergency',
    stagesCompletedIndex: 1,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  },
  {
    id: 'LIVE-05',
    orNumber: 'OR - 12',
    surgeryName: 'Open Heart Surgery',
    specialty: 'Hepatobiliary Surgery',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. Aisha Thompson',
    anesthetist: 'Dr. Sofia',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Anaesthesia Induction',
    startTime: '13:45',
    endTime: '13:45',
    delayText: 'On Time',
    isDelayed: false,
    tasksCompleted: 10,
    tasksTotal: 20,
    priority: 'Urgent',
    stagesCompletedIndex: 1,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  },
  {
    id: 'LIVE-06',
    orNumber: 'OR - 16',
    surgeryName: 'Open Heart Surgery',
    specialty: 'Obstetrics',
    patientName: 'Rajesh K',
    patientDemographics: 'M / 29 • 05/11/1994',
    bloodGroup: 'O+',
    mrn: '17650000967215',
    surgeon: 'Dr. Daniel Kim',
    anesthetist: 'Dr. Michael Chen',
    careTeamDoctors: 2,
    careTeamNurses: 2,
    currentStatus: 'Surgery Start',
    startTime: '13:45',
    endTime: '13:45',
    delayText: 'On Time',
    isDelayed: false,
    tasksCompleted: 5,
    tasksTotal: 30,
    priority: 'Emergency',
    stagesCompletedIndex: 2,
    preOpClearance: {
      financial: 'available',
      crossmatch: 'available',
      clinical: 'available',
      consent: 'available',
      pacStatus: 'Fit to Proceed',
      pacType: 'success'
    }
  }
];

export const mockKanbanColumns: KanbanStageColumn[] = [
  {
    id: 'col-1',
    title: 'Scheduled',
    headerColor: 'bg-blue-600',
    cards: [
      {
        id: 'k-1',
        otNumber: '01',
        priority: 'Emergency',
        surgeryName: 'Laparoscopic Cholecystectomy',
        surgeon: 'Dr. A. Sharma',
        patientInfo: 'Meera R (F/35) • A+ • 17540000298712',
        timeText: '08:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-2',
        otNumber: '02',
        surgeryName: 'Total Knee Replacement',
        surgeon: 'Dr. S. Patel',
        patientInfo: 'Ramesh K (M/62) • B+ • 17540000315478',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-3',
        otNumber: '03',
        surgeryName: 'Appendectomy',
        surgeon: 'Dr. P. Reddy',
        patientInfo: 'Ananya S (F/28) • O+ • 17540000421356',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-4',
        otNumber: '04',
        surgeryName: 'Hernia Repair',
        surgeon: 'Dr. M. Iyer',
        patientInfo: 'Vikram D (M/45) • AB+ • 17540000537891',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      }
    ]
  },
  {
    id: 'col-2',
    title: 'Wheeled-In',
    headerColor: 'bg-purple-600',
    cards: [
      {
        id: 'k-5',
        otNumber: '05',
        surgeryName: 'Radical Prostatectomy',
        surgeon: 'Dr. R. Gupta',
        patientInfo: 'Suresh M (M/58) • A- • 17540000643210',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-6',
        otNumber: '06',
        surgeryName: 'Thyroidectomy',
        surgeon: 'Dr. N. Desai',
        patientInfo: 'Priya J (F/41) • B- • 17540000756843',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      }
    ]
  },
  {
    id: 'col-3',
    title: 'Anaesthesia',
    headerColor: 'bg-pink-600',
    cards: [
      {
        id: 'k-7',
        otNumber: '07',
        priority: 'Emergency',
        surgeryName: 'Coronary Artery Bypass',
        surgeon: 'Dr. K. Menon',
        patientInfo: 'Rajesh T (M/55) • O- • 17540000862197',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-8',
        otNumber: '08',
        surgeryName: 'Spinal Fusion Surgery',
        surgeon: 'Dr. V. Nair',
        patientInfo: 'Deepa L (F/47) • A+ • 17540000974532',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-9',
        otNumber: '09',
        surgeryName: 'Cataract Phacoemulsification',
        surgeon: 'Dr. T. Rao',
        patientInfo: 'Kamala V (F/68) • B+ • 17540001085674',
        timeText: '09:30',
        delayBadge: { text: 'Delay 15 min', isDelayed: true }
      }
    ]
  },
  {
    id: 'col-4',
    title: 'In Progress',
    headerColor: 'bg-amber-500',
    cards: [
      {
        id: 'k-10',
        otNumber: '08',
        priority: 'Emergency',
        surgeryName: 'Laparoscopic Hysterectomy',
        surgeon: 'Dr. D. Joshi',
        patientInfo: 'Kavitha P (F/52) • AB- • 17540001196438',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-11',
        otNumber: '08',
        surgeryName: 'Hip Replacement Surgery',
        surgeon: 'Dr. B. Singh',
        patientInfo: 'Arvind G (M/71) • O+ • 17540001207815',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-12',
        otNumber: '08',
        surgeryName: 'Mastectomy',
        surgeon: 'Dr. L. Chatterjee',
        patientInfo: 'Shalini N (F/44) • A+ • 17540001318967',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-13',
        otNumber: '08',
        surgeryName: 'Emergency Lower Segment C-Section',
        surgeon: 'Dr. S. Bhat',
        patientInfo: 'Fatima A (F/29) • B+ • 17540001429301',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      }
    ]
  },
  {
    id: 'col-5',
    title: 'Closure',
    headerColor: 'bg-orange-600',
    cards: [
      {
        id: 'k-14',
        otNumber: '08',
        surgeryName: 'Craniotomy',
        surgeon: 'Dr. H. Kapoor',
        patientInfo: 'Mohan R (M/50) • O- • 17540001534782',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      }
    ]
  },
  {
    id: 'col-6',
    title: 'Transferred',
    headerColor: 'bg-emerald-600',
    cards: [
      {
        id: 'k-15',
        otNumber: '08',
        surgeryName: 'Nephrectomy',
        surgeon: 'Dr. G. Pillai',
        patientInfo: 'Lakshmi S (F/56) • AB+ • 17540001645901',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      },
      {
        id: 'k-16',
        otNumber: '08',
        surgeryName: 'Emergency Appendectomy',
        surgeon: 'Dr. C. Verma',
        patientInfo: 'Anil K (M/33) • A- • 17540001756413',
        timeText: '09:30',
        delayBadge: { text: 'On Time', isDelayed: false }
      }
    ]
  }
];

export const mockWorkflowStages: WorkflowStage[] = [
  {
    id: 'stg-1',
    name: 'Patient Entry',
    time: '10:00',
    status: 'completed',
    tasks: []
  },
  {
    id: 'stg-2',
    name: 'Pre-Op Verification',
    time: '10:20',
    status: 'in-progress',
    assignedTo: 'Arun Kumar (Care Team)',
    tasks: [
      { id: 't-1', number: 1, question: 'Blood Transfusion Consent *', required: true, answer: 'No' },
      { id: 't-2', number: 2, question: 'Anesthesia Consent *', required: true, answer: 'No' },
      { id: 't-3', number: 3, question: 'Procedure / Surgery Consent *', required: true, answer: 'No' },
      { id: 't-4', number: 4, question: 'Surgical Site Marking Verified *', required: true, answer: 'Yes' },
      { id: 't-5', number: 5, question: 'ID Band *', required: true, answer: null },
      { id: 't-6', number: 6, question: 'Prosthesis available *', required: true, answer: null },
      { id: 't-7', number: 7, question: 'Implants available *', required: true, answer: null }
    ]
  },
  {
    id: 'stg-3',
    name: 'Anaesthesia Induction',
    time: '10:00',
    status: 'pending',
    tasks: []
  },
  { id: 'stg-4', name: 'Airway & Monitoring', status: 'pending', tasks: [] },
  { id: 'stg-5', name: 'Patient Positioning', status: 'pending', tasks: [] },
  { id: 'stg-6', name: 'Surgical Timeout', status: 'pending', tasks: [] },
  { id: 'stg-7', name: 'Surgery Start', status: 'pending', tasks: [] },
  { id: 'stg-8', name: 'Intra-Op Events', status: 'pending', tasks: [] },
  { id: 'stg-9', name: 'Wound Closure', status: 'pending', tasks: [] },
  { id: 'stg-10', name: 'Anaesthesia Reversal', status: 'pending', tasks: [] },
  { id: 'stg-11', name: 'OT Notes', status: 'pending', tasks: [] }
];

