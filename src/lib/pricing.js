const ACTIVATION_FEE = 50;
const MIN_EMPLOYEES = 20;

export function getEmployeeRate(employees) {
  if (employees <= 100) return 2;
  if (employees <= 200) return 4;
  return 6;
}

export function getDeviceRate(devices) {
  return devices > 15 ? 20 : 40;
}

/**
 * Calcula a mensalidade do MetaSenior.
 * Retorna { valid, reason, breakdown, total } — breakdown detalha cada parcela.
 */
export function calculatePricing({ employees, devices }) {
  if (employees < MIN_EMPLOYEES) {
    return {
      valid: false,
      reason: `O MetaSenior exige um mínimo de ${MIN_EMPLOYEES} licenças de colaboradores.`,
    };
  }

  const employeeRate = getEmployeeRate(employees);
  const employeesCost = employees * employeeRate;

  const deviceRate = devices > 0 ? getDeviceRate(devices) : 0;
  const devicesCost = devices * deviceRate;

  const total = ACTIVATION_FEE + employeesCost + devicesCost;

  return {
    valid: true,
    breakdown: {
      activationFee: ACTIVATION_FEE,
      employeeRate,
      employeesCost,
      deviceRate,
      devicesCost,
    },
    total,
  };
}

export { ACTIVATION_FEE, MIN_EMPLOYEES };
