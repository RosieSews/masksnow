const maxSM = 600;
const maxMD = 1200;

export const bpMaxSM = `@media (max-width: ${maxSM}px)`;
export const bpMaxMD = `@media (max-width: ${maxMD}px)`;

export const bpTabletOnly = `@media (min-width: ${maxSM +
1}px) and (max-width: ${maxMD}px)`;
export const bpDesktopOnly = `@media (min-width: ${maxMD + 1}px)`;
