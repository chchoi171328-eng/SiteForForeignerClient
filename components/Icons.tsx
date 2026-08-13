import React from 'react';
import { Scale, Globe, Building2, ShieldCheck, Briefcase, Users, Phone, Mail, MapPin, Menu, X, ArrowRight, CalendarCheck, Loader2, ArrowUp, Banknote, ChevronDown } from 'lucide-react';

import Image from 'next/image';

export const CustomLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <Image
    src="/assets/logo.png"
    alt="SOL & LUNA Law Firm Logo"
    width={48}
    height={48}
    className={className}
  />
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
  Loader: Loader2,
  ArrowUp: ArrowUp,
  Banknote: Banknote,
  ChevronDown: ChevronDown
};