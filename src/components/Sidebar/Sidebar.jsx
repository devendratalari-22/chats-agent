// src/components/Sidebar.jsx
import React from "react";
import { 
  BarChart2, TestTube, Link, Users, 
  Workflow, UserCog, Package, ClipboardList, PaintBucket, 
  Gift, ChevronRight
} from 'lucide-react';

import '../Sidebar/Sidebar.css'

const menuItems = [
  { icon: BarChart2, label: 'Internal Audit', hasSubmenu: true },
  { icon: TestTube, label: 'UAT Testing' },
  { icon: Link, label: 'Intract', hasSubmenu: true },
  { icon: Users, label: 'Queue' },
  { icon: Workflow, label: 'Workflow' },
  { icon: UserCog, label: 'Admin' },
  { icon: Package, label: 'Asset' },
  { icon: Users, label: 'Parent' },
  { icon: ClipboardList, label: 'Option One' },
  { icon: ClipboardList, label: 'Option Two' },
  { icon: Link, label: 'All Accessories' },
  { icon: BarChart2, label: 'Internal Audit', hasSubmenu: true },
  { icon: PaintBucket, label: 'Decorating', hasSubmenu: true },
  { icon: Gift, label: 'Presenting' }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="https://res.cloudinary.com/dfpz92ddp/image/upload/v1733040153/riskhawk-logo_1_f6b11r.svg" alt="logo" />
      <nav>
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className="menu-items"
          >
            <div>
              <item.icon size={22} className="icons" />
              <span className="text-sm">{item.label}</span>
            </div>
            {item.hasSubmenu && <ChevronRight size={16} className="text-gray-400" />}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
