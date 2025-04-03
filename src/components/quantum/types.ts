
export interface KeyBit {
  aliceBit: '0' | '1' | null;
  aliceBasis: 'computational' | 'diagonal';
  bobBasis: 'computational' | 'diagonal';
  bobMeasurement: '0' | '1' | '+' | '-' | null;
  keep: boolean;
}

export const SIMULATION_STEPS = [
  'initial',
  'alice_prepares',
  'quantum_transmission',
  'bob_measures',
  'basis_reconciliation',
  'key_sifting',
  'complete'
];
