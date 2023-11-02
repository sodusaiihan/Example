import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        include: {
          role: true,
        },
      });
    },
    user: async (parent: any, args: any) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
        include: {
          role: true,
        },
      });
    },
    roles: async () => {
      return await prisma.role.findMany({
        include: {
          user: true,
        },
      });
    },
    role: async (parent: any, args: any) => {
      return await prisma.role.findUnique({
        where: {
          id: args.id,
        },
        include: {
          user: true,
        },
      });
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      return await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          phonenumber: args.phonenumber,
          address: args.address,
          birthday: args.birthday,
          gender: args.gender,
          roleId: args.roleId,
        },
      });
    },
    updateUser: async (parent: any, args: any) => {
      return await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
          email: args.email,
          phonenumber: args.phonenumber,
          address: args.address,
          birthday: args.birthday,
          gender: args.gender,
          roleId: args.roleId,
        },
      });
    },
    deleteUser: async (parent: any, args: any) => {
      return await prisma.user.delete({
        where: {
          id: args.id,
        },
      });
    },
    createRole: async (parent: any, args: any) => {
      return await prisma.role.create({
        data: {
          name: args.name,
        },
      });
    },
    updateRole: async (parent: any, args: any) => {
      return await prisma.role.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.name,
        },
      });
    },
    deleteRole: async (parent: any, args: any) => {
      return await prisma.role.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export default resolvers;
