import React, { createContext, useContext, useState } from 'react';

const AnalysisContext = createContext(null);

export const AnalysisProvider = ({ children }) => {
  const [measurements, setMeasurements] = useState({
    faceWidth: { valueMm: 140.0, rangeMm: [136.0, 144.0], confidence: 0.90, label: 'Face Width', isEstimated: true },
    faceHeight: { valueMm: 180.0, rangeMm: [175.0, 185.0], confidence: 0.88, label: 'Face Height', isEstimated: true },
    pupillaryDistance: { valueMm: 63.0, rangeMm: [61.0, 65.0], confidence: 0.92, label: 'Pupillary Distance', isEstimated: true },
    bridgeWidth: { valueMm: 18.0, rangeMm: [16.0, 20.0], confidence: 0.85, label: 'Nose Bridge Width', isEstimated: true },
    overallQuality: 0.89,
    isCalibrated: false,
    warningMessages: [],
  });

  const [selectedFrameId, setSelectedFrameId] = useState('frame-001');
  const [targetOccasion, setTargetOccasion] = useState('Office');
  const [calibrationMode, setCalibrationMode] = useState('heuristic_intercanthal');
  const [systemHealth, setSystemHealth] = useState({ backendOnline: false, lastChecked: null });

  return (
    <AnalysisContext.Provider
      value={{
        measurements,
        setMeasurements,
        selectedFrameId,
        setSelectedFrameId,
        targetOccasion,
        setTargetOccasion,
        calibrationMode,
        setCalibrationMode,
        systemHealth,
        setSystemHealth,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
};
