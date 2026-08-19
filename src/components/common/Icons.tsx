import React from 'react';

export const GithubIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// React Atom Logo
export const ReactIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    className={className}
  >
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// TypeScript Official Logo Badge
export const TypeScriptIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <rect width="32" height="32" rx="4" fill="#3178C6" />
    <path
      d="M17.47 18.23c-.76.4-1.63.63-2.61.63-2.07 0-3.32-1.12-3.32-3.15V9.45H8.78V6.9h8.69v2.55h-2.76v6.11c0 1.04.53 1.54 1.48 1.54.49 0 .91-.1 1.28-.31v1.44zm3.98-3.08c1.37.95 2.89 1.48 4.54 1.48 1.87 0 2.87-.77 2.87-2.04 0-1.2-.84-1.77-2.84-2.45-2.65-.91-4.14-2.04-4.14-4.22 0-2.31 1.89-4.02 4.97-4.02 1.6 0 3.01.44 4.09 1.15l-.93 2.15c-1.01-.6-2.18-.99-3.26-.99-1.65 0-2.52.79-2.52 1.83 0 1.11.88 1.63 2.84 2.32 2.76.97 4.14 2.17 4.14 4.38 0 2.45-1.92 4.18-5.32 4.18-1.89 0-3.55-.57-4.76-1.52l.35-2.25z"
      fill="#FFFFFF"
      transform="translate(1, 4) scale(0.85)"
    />
    <path
      d="M6 10h8v3h-2.5v12h-3v-12H6V10zm11.5 5.5c.8-.5 1.8-.8 3-.8 2 0 3.5 1 3.5 2.8 0 .4-.1.8-.2 1.1-1.2-.4-2.5-.7-3.8-.7-2 0-3.2 1-3.2 2.4 0 1.3 1 2.2 2.5 2.2 1.2 0 2.2-.5 2.8-1.3v1.1h3v-7.8c0-3-1.8-4.5-4.8-4.5-1.6 0-3 .4-4 1.1l1.2 2.4zm5.8 4.2c-.4.9-1.2 1.4-2.2 1.4-.8 0-1.4-.4-1.4-1.1 0-.8.7-1.3 2-1.3.6 0 1.1.1 1.6.2v.8z"
      fill="none"
    />
    <text
      x="16"
      y="23"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="17"
      fontWeight="bold"
      fill="#FFFFFF"
      textAnchor="middle"
    >
      TS
    </text>
  </svg>
);

// Node.js Logo
export const NodeIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <path
      d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
      fill="#539E43"
    />
    <path
      d="M16 5.5l9.5 5.5v11L16 27.5 6.5 22V11L16 5.5z"
      fill="#333333"
    />
    <text
      x="16"
      y="20.5"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="10"
      fontWeight="900"
      fill="#539E43"
      textAnchor="middle"
    >
      NODE
    </text>
  </svg>
);

// Docker Logo
export const DockerIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M22.5 10.5c-.3-.2-1.4-.4-2.5.3-.2.1-.4.3-.5.5-.6-.3-1.6-.4-2.5-.2-.2-.6-.7-1.1-1.3-1.4l-.5-.3-.3.5c-.4.8-.4 1.7-.1 2.5-.6.4-1.4.7-2.3.8H2.5c-.4 0-.8.3-.9.7-.5 2.1.2 4.3 1.7 5.7 1.8 1.7 4.4 2.3 6.9 2.3 5.4 0 9.8-3.1 11.2-8.3.8-.1 1.6-.7 1.9-1.5.1-.2 0-.4-.3-.6z"
      fill="#2496ED"
    />
    <rect x="5.5" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8.2" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="10.9" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8.2" y="5.5" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="10.9" y="5.5" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="13.6" y="8" width="2.2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="13.6" y="5.5" width="2.2" height="2" rx="0.3" fill="#2496ED" />
  </svg>
);

// AWS Cloud Logo
export const AwsIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#232F3E" />
    <path
      d="M6.2 12.8c-.8 0-1.4-.2-1.8-.7-.4-.5-.6-1.1-.6-1.9 0-.8.2-1.5.7-2 .5-.5 1.1-.8 1.9-.8.8 0 1.4.3 1.9.8.4.5.6 1.2.6 2v.4H5.2c0 .5.2.9.5 1.2.3.3.7.4 1.2.4.5 0 .9-.1 1.3-.3l.3 1c-.5.3-1.1.4-1.7.4zm-.2-4.1c-.4 0-.6.1-.8.4-.2.2-.3.6-.3.9h2.1c0-.4-.1-.7-.3-.9-.2-.3-.5-.4-.7-.4z"
      fill="#FFFFFF"
    />
    <path
      d="M10 7.6h1.4l1 3.5 1-3.5h1.4l1.1 5h-1.3l-.6-3.3-.9 3.3h-1.2l-1-3.3-.6 3.3H9L10 7.6z"
      fill="#FFFFFF"
    />
    <path
      d="M18.8 11.5c-.3.2-.8.4-1.3.4-.6 0-1.1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4 0-.6.2-1.1.5-1.5.3-.4.8-.6 1.4-.6.6 0 1 .2 1.3.5v-.5h1.3v4.4h-1.3v-.8zm-.3-2.6c-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.8.4-.2.2-.3.6-.3 1 0 .4.1.8.3 1 .2.2.5.4.8.4.3 0 .6-.1.7-.3.2-.2.3-.5.3-1v-.8c0-.2-.1-.3-.3-.4z"
      fill="#FFFFFF"
    />
    <path
      d="M5 16.5c3.5 2 9.5 2 14-.5"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M18 14.5l2.2 1.8-2.6.7"
      fill="#FF9900"
    />
  </svg>
);

// Git Branch Logo
export const GitIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#F05032" />
    <circle cx="16" cy="8" r="2" fill="#FFFFFF" />
    <circle cx="8" cy="12" r="2" fill="#FFFFFF" />
    <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
    <path
      d="M8 12h3c2 0 3-1 3-3V8m-3 4c1.5 0 3 1 3 3v1"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// PostgreSQL Logo
export const PostgresIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#336791" />
    <path
      d="M12 4C8.5 4 6 6.5 6 9.5c0 2 1 3.8 2.5 4.8V18c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-3.7c1.5-1 2.5-2.8 2.5-4.8C18 6.5 15.5 4 12 4zm-2 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
      fill="#FFFFFF"
    />
  </svg>
);

// MongoDB Logo
export const MongoIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2C12 2 6 8.5 6 13.5c0 3.3 2.7 6 6 6.5 3.3-.5 6-3.2 6-6.5C18 8.5 12 2 12 2z"
      fill="#47A248"
    />
    <path
      d="M12 3.5v16.5c2.8-.5 5-2.9 5-5.5 0-3.8-4-8.5-5-11z"
      fill="#499D4A"
    />
    <path
      d="M12 20.5v1.5c-.5 0-1-.2-1-.5s.5-.8 1-1z"
      fill="#3FA037"
    />
  </svg>
);

// Python Logo
export const PythonIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h2.95v.43H6.07s-1.87.21-1.87 2.71 1.63 2.6 1.63 2.6h.98v-1.3c0-1.48 1.28-1.44 1.28-1.44h2.93c1.24 0 1.2-1.12 1.2-1.12V4.5c0-1.25-1.15-1.25-1.15-1.25h-.98v-1.25h1.9zm-1.63 1.1a.57.57 0 110 1.14.57.57 0 010-1.14z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-2.95v-.43h5.89s1.87-.21 1.87-2.71-1.63-2.6-1.63-2.6h-.98v1.3c0 1.48-1.28 1.44-1.28 1.44h-2.93c-1.24 0-1.2 1.12-1.2 1.12v4.09c0 1.25 1.15 1.25 1.15 1.25h.98v1.25h-1.9zm1.63-1.1a.57.57 0 110-1.14.57.57 0 010 1.14z"
      fill="#FFD43B"
    />
  </svg>
);

// Tailwind CSS Logo
export const TailwindIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 6c-2.7 0-4.4 1.3-5.1 4 1-.7 2.1-.9 3.2-.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 2.6 6.4 2.6 2.7 0 4.4-1.3 5.1-4-1 .7-2.1.9-3.2.5-1-.3-1.7-1.1-2.5-1.9C17.1 7.3 15.6 6 12 6zM5.5 12C2.8 12 1.1 13.3.4 16c1-.7 2.1-.9 3.2-.5 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.8 2.6 6.4 2.6 2.7 0 4.4-1.3 5.1-4-1 .7-2.1.9-3.2.5-1-.3-1.7-1.1-2.5-1.9C10.6 13.3 9.1 12 5.5 12z"
      fill="#06B6D4"
    />
  </svg>
);

// Vite Logo
export const ViteIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M21.5 3.5L12.7 21a.8.8 0 01-1.4 0L2.5 3.5a.8.8 0 01.9-1.1l8.6 1.7 8.6-1.7a.8.8 0 01.9 1.1z"
      fill="url(#viteGrad)"
    />
    <path
      d="M14.5 3l-6 10h4l-2 8 8-11h-4l3-7h-3z"
      fill="#FFD43B"
    />
    <defs>
      <linearGradient id="viteGrad" x1="2.5" y1="2.4" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

// Helper function to resolve small logos for any technology
export const getTechIcon = (techName: string, size = 15): React.ReactNode => {
  const normalized = techName.toLowerCase().trim();

  if (normalized === 'react' || normalized === '⚛ react' || normalized.includes('react')) {
    return <ReactIcon size={size} />;
  }
  if (
    normalized === 'ts' ||
    normalized === 'typescript' ||
    normalized.includes('typescript')
  ) {
    return <TypeScriptIcon size={size} />;
  }
  if (
    normalized === 'node' ||
    normalized === 'node.js' ||
    normalized.includes('node')
  ) {
    return <NodeIcon size={size} />;
  }
  if (normalized === 'docker' || normalized.includes('docker')) {
    return <DockerIcon size={size} />;
  }
  if (normalized === 'aws' || normalized.includes('amazon') || normalized.includes('cloud')) {
    return <AwsIcon size={size} />;
  }
  if (normalized === 'git' || normalized.includes('git')) {
    return <GitIcon size={size} />;
  }
  if (normalized.includes('postgres') || normalized.includes('sql') || normalized.includes('mysql')) {
    return <PostgresIcon size={size} />;
  }
  if (normalized.includes('mongo')) {
    return <MongoIcon size={size} />;
  }
  if (normalized.includes('python')) {
    return <PythonIcon size={size} />;
  }
  if (normalized.includes('tailwind')) {
    return <TailwindIcon size={size} />;
  }
  if (normalized.includes('vite')) {
    return <ViteIcon size={size} />;
  }

  return null;
};

