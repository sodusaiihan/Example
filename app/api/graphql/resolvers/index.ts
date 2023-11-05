import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    },
    user: async (parent: any, args: any) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    getAllAdmin: async () => {
      try {
        const adminUsers = await prisma.user.findMany({
          where: {
            role: "admin",
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        return adminUsers;
      } catch (error) {
        throw new GraphQLError("Failed to fetch admin users");
      }
    },
    getAllUser: async (parent: any, args: any) => {
      try {
        const users = await prisma.user.findMany({
          where: {
            role: "user",
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        return users;
      } catch (error) {
        throw new GraphQLError("Failed to fetch users");
      }
    },
    getRecentUsers: async (parent: any, args: any) => {
      try {
        const users = await prisma.user.findMany({
          orderBy: {
            createdAt: "desc",
          },
          take: 5,
        });
        return users;
      } catch (error) {
        console.log("[GET_RECENT_USERS]");
        throw new GraphQLError("Failed to fetch users");
      }
    },
    getOverView: async (parent: any, args: any) => {
      try {
        const result = await prisma.user.groupBy({
          by: ["role"],
          _count: {
            role: true,
          },
        });
        const overView = result.map((item) => ({
          role: item.role,
          total: item._count.role,
        }));
        return overView;
      } catch (error) {
        console.log("[GET_OVERVIEW]");
        throw new GraphQLError("Failed to fetch overview");
      }
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      return await prisma.user.create({
        data: {
          role: args.role,
          name: args.name,
          email: args.email,
          phonenumber: args.phonenumber,
          address: args.address,
          birthday: args.birthday,
          gender: args.gender,
        },
      });
    },
    updateUser: async (parent: any, args: any) => {
      try {
        const foundUser = await prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });

        if (!foundUser) {
          throw new GraphQLError("Unauthorized");
        }
        const user = await prisma.user.update({
          where: {
            id: args.id,
          },
          data: {
            role: args.role,
            name: args.name,
            email: args.email,
            phonenumber: args.phonenumber,
            address: args.address,
            birthday: args.birthday,
            gender: args.gender,
          },
        });
        return user;
      } catch (error) {
        console.error("[UPDATE_USER_ID]", error);
        throw new GraphQLError("Internal Server Error");
      }
    },
    deleteUser: async (parent: any, args: any) => {
      try {
        await prisma.user.delete({
          where: {
            id: args.id,
          },
        });
        return true;
      } catch (error) {
        console.error("[DELETE_USER_ID]", error);
        throw new GraphQLError(
          "Unable to delete the user. Please try again later."
        );
      }
    },
  },
};

export default resolvers;
