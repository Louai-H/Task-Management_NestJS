export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export function isValidTaskStatus(status: string): boolean {
  return Object.keys(TaskStatus).includes(status);
}
