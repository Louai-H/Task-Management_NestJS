import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message:
      `'$value' is an invalid status. ` +
      `The allowed values are: ${Object.keys(TaskStatus)}`,
  })
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
