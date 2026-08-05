import React from 'react';
import Navbar from './components/Navbar.jsx';
import MentorDashboard from './components/MentorDashboard.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import Footer from './components/Footer.jsx';
import mentorData from './data/mentorData.js';
import studentData from './data/studentData.js';

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <section className="dashboard-summary">
          <MentorDashboard mentor={mentorData} />
        </section>
        <section className="dashboard-table">
          <StudentDashboard students={studentData} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
