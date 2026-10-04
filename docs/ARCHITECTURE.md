# OptiFit 3D System Architecture & Mathematical Specification

## 1. System Pipeline
1. **Biometric Mesh Acquisition**: 468/478 3D landmark coordinates extracted via MediaPipe Face Landmarker.
2. **Geometric Normalization & Real-World Estimation**:
   - Landmark distance metrics computed in normalized camera coordinate space.
   - Heuristic inter-ocular calibration to estimate millimeter dimensions (clearly flagged as `Estimated`).
   - Landmark indices:
     - Cheek width: `[234]` to `[454]`
     - Eye pupils: `[468]` (left iris) to `[473]` (right iris)
     - Nose bridge: `[168]` (sellion), `[102]` to `[331]` (alar base)
3. **Ergonomic Compatibility Engine**:
   - Width ratio evaluation: $\text{Ratio} = \frac{\text{Frame Width}}{\text{Estimated Face Width}}$
   - Bridge clearance and nose angle alignment.
   - Pupil center-of-lens delta: $\Delta_{pupil} = |\text{Pupil X} - \text{Lens Center X}|$
4. **Ergonomic Scoring Framework**:
   $$\text{Fit Score} = w_w \cdot S_{width} + w_b \cdot S_{bridge} + w_e \cdot S_{pupil} + w_t \cdot S_{temple}$$
5. **Interactive 3D Viewport**:
   - React Three Fiber (R3F) renders canonical 3D face mesh + parametric frame model.
   - Dynamic real-time transform matrices matching user face rotation, yaw, pitch, roll, and scaling.
