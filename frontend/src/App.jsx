import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Analyze } from './pages/Analyze';
import { Dashboard } from './pages/Dashboard';
import { MeetingDetail } from './pages/MeetingDetail';
import { Progress } from './pages/Progress';
import { Diff } from './pages/Diff';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meeting/:id" element={<MeetingDetail />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/diff" element={<Diff />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}
