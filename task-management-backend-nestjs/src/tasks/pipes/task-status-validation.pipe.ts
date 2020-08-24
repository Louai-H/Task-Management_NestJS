import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';
import { isValidTaskStatus, TaskStatus } from '../task-status.enum';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  transform(status: string): string {
    status = status.toUpperCase();

    if (!isValidTaskStatus(status)) {
      throw new BadRequestException(
        `'${status}' is not a valid status.` +
          `The allowed values are: ${Object.keys(TaskStatus)}`,
      );
    }

    return status;
  }
}
