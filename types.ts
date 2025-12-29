import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PillarData {
  title: string;
  days: string;
  color: string;
  bgStart: string;
  bgEnd: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
}

export interface BenefitData {
  title: string;
  description: string;
}