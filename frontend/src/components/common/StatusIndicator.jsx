import React from 'react';

export const StatusIndicator = ({ status = 'online', label }) => {
  const isOnline = status === 'online' || status === 'healthy';
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOnline ? 'bg-emerald-400' : 'bg-rose-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOnline ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
      </span>
      <span>{label || (isOnline ? 'ENGINE READY' : 'OFFLINE')}</span>
    </div>
  );
};
