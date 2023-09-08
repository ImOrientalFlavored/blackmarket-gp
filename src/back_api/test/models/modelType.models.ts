import { PrismaClient, Prisma } from "@prisma/client";
import { getPrismaClient } from "@prisma/client/runtime/library";

type PrismaPromiseReturnType<T> = T extends (...args: any[]) => Promise<infer U> ? U : any;

type OperationMethods = "findUnique" | "findMany" | "create" | "update" | "delete";
type Operations<T extends Record<string, any>> = { [P in keyof T]:  PrismaPromiseReturnType<T[P]> };

type PrismaModelOperations<Model extends keyof PrismaClient> = {
  [P in OperationMethods]: PrismaClient[Model][P] extends (...args: any[]) => any ? PrismaPromiseReturnType<PrismaClient[Model][P]> : never;
};



const performOperation = async <
    Model extends keyof PrismaClient,
    P extends keyof PrismaModelOperations<Model>
    >(
        client: PrismaClient,
        model: Model,
        operation: P,
        ...args: Parameters<PrismaClient[Model][P]>
    )
    : Promise<PrismaModelOperations<Model>[P] | undefined> => {
        try {
            const result = await (client[model][operation] as any)(...args);
            console.log(result);
            return result;
        } catch (error) {
            console.error(
                `Attempt to do operation:${String(
                    operation
                )} with model:${String(model)} failed: `,
                error
            );
            return undefined;
        }
};



export const getItem = <Model extends keyof PrismaClient>(
    client: PrismaClient,
    model: Model,
    id: number
) =>
    performOperation(client, model, "findUnique", {
        where: {
            id: id
        }
    });

export const listItems = <Model extends keyof PrismaClient>(
    client: PrismaClient,
    model: Model
) => performOperation(client, model, "findMany");

export const addItem = <Model extends keyof PrismaClient, CreateInput>(
    client: PrismaClient,
    model: Model,
    item: CreateInput
) =>
    performOperation(client, model, "create", {
        data: {
            ...item
        }
    });

export const editItem = <Model extends keyof PrismaClient, UpdateInput>(
    client: PrismaClient,
    model: Model,
    id: number,
    item: UpdateInput
) =>
    performOperation(client, model, "update", {
        where: {
            id: id
        },
        data: {
            ...item
        }
    });

export const deleteItem = <Model extends keyof PrismaClient>(
    client: PrismaClient,
    model: Model,
    id: number
) =>
    performOperation(client, model, "delete", {
        where: {
            id: id
        }
    });
