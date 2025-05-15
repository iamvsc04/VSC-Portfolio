import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch, faCoffee, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/Statistics.scss';

const Statistics = () => {
  // Statistics data
  const stats = [
    {
      id: 1,
      icon: faCode,
      value: '150,000+',
      label: 'Lines of Code Written'
    },
    {
      id: 2,
      icon: faCodeBranch,
      value: '75+',
      label: 'Projects Completed'
    },
    {
      id: 3,
      icon: faCoffee,
      value: '3,000+',
      label: 'Cups of Coffee'
    },
    {
      id: 4,
      icon: faUsers,
      value: '50+',
      label: 'Happy Clients'
    },
    {
      id: 5,
      icon: faLaptopCode,
      value: '7+',
      label: 'Years of Experience'
    }
  ];

  // GitHub contributions data (simulated)
  const githubData = {
    totalContributions: 2547,
    repositories: 35,
    followers: 120,
    stars: 380
  };

  // Programming language distribution (for pie chart)
  const languages = [
    { name: 'JavaScript', percentage: 40 },
    { name: 'Python', percentage: 25 },
    { name: 'HTML/CSS', percentage: 15 },
    { name: 'Java', percentage: 10 },
    { name: 'Others', percentage: 10 }
  ];

  // Weekly coding hours (for bar chart)
  const weeklyHours = [
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 9 },
    { day: 'Wed', hours: 7 },
    { day: 'Thu', hours: 10 },
    { day: 'Fri', hours: 8 },
    { day: 'Sat', hours: 5 },
    { day: 'Sun', hours: 3 }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        <h1 className="section-title">Statistics</h1>
        <p className="section-description">
          A numerical overview of my developer journey and achievements.
        </p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="github-section">
          <h2 className="subsection-title">GitHub Activity</h2>
          <div className="github-stats">
            <div className="github-stat">
              <span className="github-stat-value">{githubData.totalContributions}</span>
              <span className="github-stat-label">Contributions</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{githubData.repositories}</span>
              <span className="github-stat-label">Repositories</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{githubData.followers}</span>
              <span className="github-stat-label">Followers</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{githubData.stars}</span>
              <span className="github-stat-label">Stars</span>
            </div>
          </div>
          <div className="github-calendar">
            {/* In a real implementation, you would use a GitHub contributions calendar library here */}
            <div className="placeholder-calendar">GitHub Contributions Calendar</div>
          </div>
        </div>

        <div className="chart-section">
          <div className="language-distribution">
            <h2 className="subsection-title">Language Distribution</h2>
            <div className="language-chart">
              {/* In a real implementation, you would use a chart library like Chart.js */}
              <div className="placeholder-chart">
                <div className="languages-list">
                  {languages.map((language, index) => (
                    <div key={index} className="language-item">
                      <div className="language-color" style={{ backgroundColor: `hsl(${index * 50}, 70%, 60%)` }}></div>
                      <span className="language-name">{language.name}</span>
                      <span className="language-percentage">{language.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="weekly-hours">
            <h2 className="subsection-title">Weekly Coding Hours</h2>
            <div className="hours-chart">
              {/* In a real implementation, you would use a chart library like Chart.js */}
              <div className="placeholder-chart">
                <div className="hours-bars">
                  {weeklyHours.map((day, index) => (
                    <div key={index} className="hour-bar-container">
                      <div 
                        className="hour-bar" 
                        style={{ 
                          height: `${day.hours * 10}px`,
                          backgroundColor: `hsl(200, 70%, ${40 + day.hours * 3}%)`
                        }}
                      ></div>
                      <div className="day-label">{day.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics; 