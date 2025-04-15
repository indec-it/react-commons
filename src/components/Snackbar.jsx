import React from 'react';

import {CloseIcon, CheckCircleIcon, ErrorIcon, HelpIcon} from './Icons';

export default function Snackbar({open, message, onClose, severity}) {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  const severityConfig = {
    success: {
      bgColor: 'bg-green-600',
      icon: CheckCircleIcon
    },
    error: {
      bgColor: 'bg-red-600',
      icon: ErrorIcon
    },
    warning: {
      bgColor: 'bg-orange-600',
      icon: HelpIcon
    },
    info: {
      bgColor: 'bg-blue-600',
      icon: HelpIcon
    }
  };

  const config = severityConfig[severity] || severityConfig.info;
  const Icon = config.icon;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div
        className={`${config.bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-[500px]`}
      >
        <Icon size={20} />
        <span className="flex-1">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
          aria-label="Cerrar"
        >
          <CloseIcon size={18} />
        </button>
      </div>
    </div>
  );
}
