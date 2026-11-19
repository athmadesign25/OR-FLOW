# OR Flow Design Inventory

## Reference set

The exported JPGs are stored in the project root; there is no `design-references/` directory. All 41 exports were reviewed. Several are state variations of the same page rather than separate modules.

| Module / screen | Reference exports | Observed variations |
|---|---|---|
| App shell and navigation | `1 - side menu.jpg` | Full-height icon rail, expanded drawer, selected module; global top bar, account and utility icons |
| OR Manager: surgery wait list | `2 - Surgery wait list.jpg`, `table expended section.jpg`, `table - side expended view foe view all surgical team..jpg`, `table view all - side expended view.jpg` | Dense table, alternating white/cool-gray rows, row expansion with surgery profile/team/resources, team side sheet, all-team view |
| OR Manager: scheduled surgery | `schedule surgery.jpg`, `scheduled surgery - table expended view.jpg` | Scheduled table, Modify and overflow actions, expanded details |
| Manager table actions and filters | `filter - pop up.jpg`, `filter applied.jpg`, `export pop up.jpg`, `table menu - popover.jpg`, `cancel request pop up.jpg` | Filter dialog with quick filters and chips; applied-filter count; Export menu; Modify/Cancel menu; reason-required cancellation confirmation |
| Manager clinical/pre-op details | `preop clearance - pop up click on each row.jpg`, `Clinical indicators- pop up.jpg`, `i icon - legend pop up.jpg` | Pre-op clearance dialog, clinical detail popover, four-column legend |
| OR Overview: day/week/month | `OT Overview- day view.jpg`, `OT Overview- day view surgery details pop up.jpg`, `OT Overview - week view.jpg`, `OT Overview- month calander.jpg`, `OT Overview - monthly view.jpg`, `OT Overview - monthaly view expended day view..jpg`, `OT Overview- legend.jpg` | Day timeline by OT, surgery detail card, week grid, month grid with daily OR counts and overflow, right-side daily schedule drawer, status legend, date picker |
| OR Overview: create request | `Create New Request.jpg`, `Create New Request-1.jpg`, `Create New Request- filled form.jpg`, `Create New Request- min and hours drop down.jpg`, `OR Schedule - pop up when submitting Create New Request.jpg` | Patient/request form with live schedule rail, date/time picker, duration hour/minute selector, filled state, post-submit schedule-now confirmation |
| OR Overview: work pattern | `Create Work Pattern.jpg`, `Create Work Pattern - filled form.jpg`, `Create Work Pattern - mark calander unavaialble.jpg`, `Create Work Pattern - unavailable time details pop up.jpg` | Recurrence form, day-of-week selection, overbooking option, unavailable-time details/reason, submit/cancel |
| OR Request: doctor-submitted request | `OT Request request received from doctor, pre selected information.jpg`, `Schedule OR form.jpg` | Read-only prefilled patient/request profile, editable detail action, surgical team and supply requirements, right schedule rail |
| OR Live: live updates | `ORM Live.jpg`, `ORM Live _ Live Updates _ list view.jpg`, `ORM Live _ Live Updates _ table view.jpg` | KPI strip, list cards or table/kanban toggle, status timeline cards, emergency highlight, upcoming strip |
| OR Live: action center | `ORM Live _ action center.jpg`, `ORM Live _ action center _ Surgical Workflow Stages.jpg`, `ORM Live _ action center _ Surgical Workflow Stages listening mode.jpg`, `ORM Live _ action center _ Surgical Workflow Stages , surgery details.jpg` | Cases table, workflow-stage detail, task answers, active listening/waveform state, expanded surgery/team/blood/device summary |
| Small graphic | `Rectangle 8462.jpg` | Small amber rounded rectangle; no independent screen or workflow |

## Information architecture

- **OR Manager**: Surgery wait list, Scheduled Surgery, OR Overview. Primary actions are search, filter, export, create request, schedule, modify, cancel and expand details.
- **OR Overview**: Day, Week and Month modes. Date navigation and status legend are shared. Day/week/month events open detail UI; month overflow opens the selected day's scheduled OR side panel. Create Work Pattern and Create New Request launch dialogs/pages.
- **OR Live**: Live Updates and Action Center. Live Updates can switch between list and table/kanban presentation. Action Center opens a case's staged surgical workflow, task responses and listening mode.
- **OR Request / Schedule OR**: request detail and surgical scheduling form, with team, equipment, consumables, implants and blood products.
- **Global shell**: fixed narrow icon navigation, optional expanded drawer, top breadcrumb/title, utility actions and user profile.

## Shared component mapping

| Reference pattern | Reusable component |
|---|---|
| Global header, nav rail and expanded drawer | `AppShell`, `GlobalHeader`, `SidebarNav` |
| Underlined module tabs and segmented view controls | `Tabs`, `SegmentedControl` |
| Waitlist and live case grids | `DataTable`, `PatientCell`, `PriorityDot`, `StatusBadge` |
| Financial/crossmatch/clinical/consent/PAC statuses | `PreOpClearanceGrid`, `PreOpClearanceDialog` |
| Allergy/comorbidity/ASA/MET/BMI summary | `ClinicalIndicatorSummary`, `ClinicalIndicatorsPopover` |
| Priority/status key | `LegendPopover` |
| Surgery profile, team, resources | `SurgeryDetailsPanel`, `SurgicalTeamSheet`, `ResourceSummary` |
| Filter, cancel, submit confirmations | `Dialog`, `FilterDialog`, `ConfirmDialog` |
| Row action and export menu | `DropdownMenu` |
| Day/week/month schedule | `ScheduleToolbar`, `DayTimeline`, `WeekCalendar`, `MonthCalendar`, `ScheduleEvent`, `DailyScheduleSheet` |
| New request and work-pattern entry | `RequestForm`, `WorkPatternDialog`, `Field`, `Select`, `DateTimePicker` |
| Live operation stages | `LiveStats`, `LiveUpdatesList`, `LiveUpdatesTable`, `WorkflowTimeline`, `WorkflowTasks`, `ListeningControl` |

## Visual system observations

The supplied application uses a clean hospital operations dashboard style: white surfaces over a very light gray canvas, bright clinical blue for primary actions and selected states, fine cool-gray separators, and dense content with carefully aligned columns. The desktop exports are approximately 2880 px wide and use a compact interface, while the core spacing and hierarchy remain suitable for responsive reflow.

| Token | Initial value / usage |
|---|---|
| Canvas | `#F5F6F8` to `#F8FAFC` |
| Surface | `#FFFFFF` |
| Primary blue | `#1677F8` / current scaffold `#1A73E8` |
| Primary pale | `#E7F1FB` / selected navigation and subtle active fills |
| Text | `#24262A` primary; `#68717C` secondary; `#A0A5AD` muted |
| Border | `#D9DDE3`, with `#E8EBEF` for row separators |
| Success | `#16A34A`; pale fill `#EAF8EC` |
| Warning / in progress | `#E5A400`; pale fill `#FFF7D6` |
| Danger / emergency | `#E11D2E`; pale fill `#FFF0F0` |
| Scheduled accent | `#8B16F5` with a pale lavender fill |
| Typography | Inter; labels and body primarily 14–16 px, dense table content 12–14 px, screen/page titles 20–24 px, section labels 15–18 px |
| Spacing | 4 px base rhythm; common gaps 8/12/16/24 px; page gutters 16–24 px |
| Radii | 4–6 px controls and rows; 8–12 px cards/dialogs; pills fully rounded |
| Shadows | Subtle neutral shadow on floating menus, dialogs and cards; avoid strong elevation |
| Controls | Typical 40–44 px high inputs/actions; thin 1 px neutral outline; primary button blue fill and white semibold text |

Color estimates are taken from raster exports and should be checked against the running app during visual review. Status colors are semantic and consistently repeated across tables, calendars and live-operation cards.

## Existing project and architecture findings

- Vite + React 18 + TypeScript 5.6 + Tailwind CSS 3.4; `lucide-react`, `clsx` and `tailwind-merge` are already dependencies.
- `index.html` currently embeds the entire app in 2,600+ lines of JSX interpreted by Babel from CDN scripts. This is the working prototype and contains the shell, module navigation, waitlist, schedule calendar, request form, work-pattern dialog, live updates and action center.
- `src/` contains reusable domain types, mock data, and four common components (`PriorityIndicator`, `PreOpClearanceGrid`, `ClinicalIndicators`, `LegendPopover`), but no React entry or page tree is currently listed.
- Tailwind already has the Inter family and clinical status colors. There is no shadcn/ui package or generated component set. The plan is to use shadcn-style local primitives (customized to the screenshots) while retaining the existing dependency footprint unless installation is available and needed.

## Implementation sequence

1. Move the current prototype entry to Vite's React/TypeScript entry and establish shared tokens and shell.
2. Implement and review OR Manager list, scheduled table, expansions, filters and dialogs.
3. Implement and review OR Overview day/week/month, event details and work patterns.
4. Implement and review request creation and Schedule OR forms.
5. Implement and review OR Live list/table and surgical workflow/action-center states.
6. Run the project build and browser review, then fix screen-specific layout and responsive gaps.
