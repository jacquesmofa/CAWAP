import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Program {
  id: number;
  title: string;
  icon: string;
  link: string;
  color: string;
  description: string;
}

const InteractiveProgramsHub = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const programs: Program[] = [
    {
      id: 1,
      title: 'Youth Leadership',
      icon: 'ri-team-line',
      link: '/youth-leadership',
      color: '#3c1053',
      description: 'Empowering young minds to become tomorrow\'s leaders',
    },
    {
      id: 2,
      title: 'Capital G-Girls',
      icon: 'ri-women-line',
      link: '/capital-g-girls',
      color: '#c9b037',
      description: 'Building confidence in young women',
    },
    {
      id: 3,
      title: 'Heart-Wise Seniors',
      icon: 'ri-heart-pulse-line',
      link: '/heart-wise-seniors',
      color: '#3c1053',
      description: 'Supporting our seniors with health programs',
    },
    {
      id: 4,
      title: 'Food Bank',
      icon: 'ri-restaurant-line',
      link: '/food-bank',
      color: '#c9b037',
      description: 'Providing essential food support',
    },
    {
      id: 5,
      title: 'Women Empowerment',
      icon: 'ri-user-star-line',
      link: '/women-empowerment',
      color: '#3c1053',
      description: 'Empowering women through education',
    },
    {
      id: 6,
      title: 'JavaScript Program',
      icon: 'ri-code-line',
      link: '/javascript-program',
      color: '#c9b037',
      description: 'Tech skills for the digital economy',
    },
  ];

  const radius = 200;
  const centerX = 250;
  const centerY = 250;

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <svg width="500" height="500" className="relative z-10">
        {/* Center Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r="60"
          fill="url(#gradient)"
          className="drop-shadow-2xl"
        />
        <text
          x={centerX}
          y={centerY - 10}
          textAnchor="middle"
          className="text-white font-bold text-lg"
        >
          CAWAP
        </text>
        <text
          x={centerX}
          y={centerY + 10}
          textAnchor="middle"
          className="text-white text-sm"
        >
          Programs
        </text>

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3c1053" />
            <stop offset="100%" stopColor="#c9b037" />
          </linearGradient>
        </defs>

        {/* Program Nodes */}
        {programs.map((program, index) => {
          const angle = (index * 2 * Math.PI) / programs.length - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <g key={program.id}>
              {/* Connection Line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={program.color}
                strokeWidth="2"
                opacity="0.3"
                className="transition-all duration-500"
                style={{
                  strokeWidth: selectedProgram === program.id ? '4' : '2',
                  opacity: selectedProgram === program.id ? '0.8' : '0.3',
                }}
              />

              {/* Program Node */}
              <Link to={program.link}>
                <circle
                  cx={x}
                  cy={y}
                  r={selectedProgram === program.id ? '50' : '40'}
                  fill={program.color}
                  className="cursor-pointer transition-all duration-500 drop-shadow-lg hover:drop-shadow-2xl"
                  onMouseEnter={() => setSelectedProgram(program.id)}
                  onMouseLeave={() => setSelectedProgram(null)}
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  className="text-white font-semibold text-xs pointer-events-none"
                  style={{ fontSize: selectedProgram === program.id ? '14px' : '12px' }}
                >
                  {program.title.split(' ')[0]}
                </text>
              </Link>
            </g>
          );
        })}
      </svg>

      {/* Program Details Panel */}
      {selectedProgram && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 elite-card">
          {programs
            .filter((p) => p.id === selectedProgram)
            .map((program) => (
              <div key={program.id} className="text-center">
                <i className={`${program.icon} text-5xl mb-3`} style={{ color: program.color }}></i>
                <h3 className="text-2xl font-bold text-[#3c1053] mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link
                  to={program.link}
                  className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn whitespace-nowrap"
                >
                  Explore Program
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveProgramsHub;
