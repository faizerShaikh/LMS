import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetSearchQuery = createParamDecorator(
  (_: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query.query as string;
    if (!query) return undefined;

    return query.trim();
  },
);
