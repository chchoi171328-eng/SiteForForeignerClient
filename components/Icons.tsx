import React from 'react';
import { Scale, Globe, Building2, ShieldCheck, Briefcase, Users, Phone, Mail, MapPin, Menu, X, ArrowRight, CalendarCheck, Loader2 } from 'lucide-react';

export const CustomLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#D4AF37" />
    <path d="M10 50 C 30 40, 70 40, 90 50" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M15 65 C 35 55, 75 55, 85 65" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M20 35 C 40 25, 80 25, 80 35" stroke="white" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const Icons = {
  Scale: Scale,
  Globe: Globe,
  Building: Building2,
  Shield: ShieldCheck,
  Briefcase: Briefcase,
  Users: Users,
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
  Menu: Menu,
  X: X,
  ArrowRight: ArrowRight,
  Calendar: CalendarCheck,
  Loader: Loader2
};