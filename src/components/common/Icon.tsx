

import {
    LayoutDashboard,
    ClipboardList,
    Users,
    CalendarDays,
    Search,
    Paperclip,
    X,
    Bell,
    Info,
    MoreVertical,
    AlertTriangle,
    Check,
    Clock,
    ChevronDown,
    ChevronUp,
    ArrowUpDown,
    ListFilter,
    Ellipsis,
    type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
    kanban: LayoutDashboard,
    clipboard: ClipboardList,
    users: Users,
    calendar: CalendarDays,
    search: Search,
    paperclip: Paperclip,
    cross: X,
    bell: Bell,
    info: Info,
    'more-vertical': MoreVertical,
    alert: AlertTriangle,
    check: Check,
    clock: Clock,
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'arrow-up-down': ArrowUpDown,
    filter: ListFilter,
    'list-filter': ListFilter,
    more: Ellipsis,
    ellipsis: Ellipsis,
};

type IconProps = {
    name: string;
    className?: string;
    size?: number | string;
};

export function Icon({
    name,
    className,
    size,
}: IconProps) {
    const Component = icons[name];

    if (!Component) {
        console.warn(`Unknown icon: ${name}`);
        return null;
    }

    return <Component className={className} size={size} />;
}
